// @packages
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

// @scripts
import { config } from '../config';

/**
 * Gets the paramters of a mocked service.
 * @param {{params: object}|{data: string}} call
 * @returns {Object}
 */
export const getMockParams = (call) => {
  return call.params || JSON.parse(call.data);
};

/**
 * Creates a response for a mocked service.
 * @param {Object} data - Data to be sent in the response.
 * @param {number} httpCode - Http code associated with the response.
 * @returns {[
 *  httpCode: number,
 *  response: object
 * ]}
 */
const createMockResponse = ({ data = null, httpCode = 200 }) => [
  httpCode,
  data
];

const mockedServices = {
  mockServiceSecurityLogin: (mockAdapter) => {
    mockAdapter.onPost(config.services.security.login).reply((call) => {
      const { email, password } = getMockParams(call);
      const { loginUserName, loginPassword } = config.settings.serviceMocker;

      const success =
          (email === loginUserName) &&
          (password === (loginPassword));
      return createMockResponse({
          data: success ? config.mockData.security.user : null,
          httpCode: success ? 200 : 401
      });
    });
  }
};

export const initializeServiceMocker = (store) => {
      const mockAdapter = new MockAdapter(axios, { delayResponse: 2000 });
      const serviceMocker = {
          replyWithMockData: () => {
              mockAdapter.reset();
              const include = config.settings.serviceMocker.include || [];
              Object.keys(mockedServices).forEach((name) => {
                  if (include.some(item => item === name)) {
                    mockedServices[name](mockAdapter, store);
                  }
              });
              mockAdapter.onAny().passThrough();
          },
          replyWithNetworkError: () => {
              mockAdapter.reset();
              mockAdapter.onAny().networkError();
          }
      };

      serviceMocker.replyWithMockData();
      return serviceMocker;
};
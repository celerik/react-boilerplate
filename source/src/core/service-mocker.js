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
      console.log(getMockParams(call),'el login', config.mockData.security.user)

      const { email, password } = getMockParams(call);
      const {
        email: mockEmail,
        password: mockPassword
      } = config.mockdata.security.user;
      debugger


      const success = email === mockEmail && password === mockPassword;
      return createMockResponse({
        data: success ? config.mockdata.security.user : null,
        httpCode: success ? 200 : 401
      });
    });
  }
};

export const initializeServiceMocker = (store) => {
      const mockAdapter = new MockAdapter(
          axios, {
              delayResponse: config.settings.serviceMocker.delayResponse
          }
      );
      const serviceMocker = {
          replyWithMockData: () => {
              mockAdapter.reset();
              const exclude = config.settings.serviceMocker.exclude || [];
              Object.keys(mockedServices).forEach((name) => {

                  if (!exclude.some(item => item === name)) {
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
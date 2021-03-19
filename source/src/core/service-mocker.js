// @packages
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

// @scripts
import { config } from '../config';

import {
    createMockResponse,
    getMockParams
} from '../util';

const mockedServices = {
    mockServiceSecurityLogin: (mockAdapter) => {
        mockAdapter.onPost(config.services.security.login).reply((call) => {
            const { email, password } = getMockParams(call);
            const { loginUserName, loginPassword } = config.settings.serviceMocker;

            const success = (email === loginUserName)
          && (password === (loginPassword));
            return createMockResponse({
                data: success ? config.mockData.security.user : null,
                httpCode: success ? 200 : 401
            });
        });
    }
};

export const initializeServiceMocker = (store) => {
    const mockAdapter = new MockAdapter(axios, { delayResponse: config.settings.serviceMocker.delayResponse });
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

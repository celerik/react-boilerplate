// @packages
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

// @scripts
import { config } from '../config';
import { format } from '../util/string';
import {
    createMockResponse,
    getMockParams
} from '../util';

// @constants
const httpCodes = {
    success: 200,
    unauthorized: 401
};

const mockedServices = {
    mockServiceGetProjects: (mockAdapter) => {
        mockAdapter.onGet(config.services.projects.get).reply(() => createMockResponse({
            data: config.mockData.projects,
            httpCode: httpCodes.success
        }));
    },
    mockServiceGetProjectsVehicles: (mockAdapter) => {
        const url = config.services.projects.getProjectsVehicles;
        const pathRegexp = new RegExp(format(url, '.*'));
        mockAdapter.onGet(pathRegexp).reply(() => createMockResponse({
            data: config.mockData.projectsVehicles,
            httpCode: httpCodes.success
        }));
    },
    mockServiceGetRoutes: (mockAdapter) => {
        const url = config.services.routes.getRoutes;
        const pathRegexp = new RegExp(format(url, '.*'));
        mockAdapter.onGet(pathRegexp).reply(() => createMockResponse({
            data: config.mockData.routes,
            httpCode: httpCodes.success
        }));
    },
    mockServiceGetServicePattern: (mockAdapter) => {
        const url = config.services.servicePatterns.getOne;
        const pathRegexp = new RegExp(format(url, '.*', '.*'));
        mockAdapter.onGet(pathRegexp).reply(() => {
            const servicePatterDetails = config.mockData.servicePatternsDetailed[
                Math.floor(Math.random() * config.mockData.servicePatternsDetailed.length)
            ];

            return createMockResponse({
                data: servicePatterDetails,
                httpCode: httpCodes.success
            });
        });
    },
    mockServiceGetServicePatterns: (mockAdapter) => {
        const url = config.services.servicePatterns.get;
        const pathRegexp = new RegExp(format(url, '.*'));
        mockAdapter.onGet(pathRegexp).reply(() => createMockResponse({
            data: config.mockData.servicePatterns,
            httpCode: httpCodes.success
        }));
    },
    mockServiceGetTeams: (mockAdapter) => {
        const url = config.services.teams.get;

        mockAdapter.onGet(url).reply(() => createMockResponse({
            data: config.mockData.teams,
            httpCode: httpCodes.success
        }));
    },
    mockServiceSecurityLogin: (mockAdapter) => {
        mockAdapter.onPost(config.services.security.login).reply((call) => {
            const { email, password } = getMockParams(call);
            const { loginUserName, loginPassword } = config.settings.serviceMocker;

            const success = (email === loginUserName) && (password === (loginPassword));
            return createMockResponse({
                data: success ? config.mockData.security.user : null,
                httpCode: success ? httpCodes.success : httpCodes.unauthorized
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

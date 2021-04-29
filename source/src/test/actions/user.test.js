// @scripts
import { config } from '../../config';
import {
    LOGIN,
    LOGOUT,
    logout,
    loginWithGoogle
} from '../../actions';

describe('login', () => {
    test('login)', () => {
        const credentials = {
            authToken: config.settings.serviceMocker.authToken,
            email: config.settings.serviceMocker.loginUserName,
            name: config.settings.serviceMocker.name
        };
        const actionCreator = loginWithGoogle(credentials);
        const expectedActions = [{
            type: LOGIN,
            payload: config.mockData.security.user
        }];
        return global.testDispatch(actionCreator, expectedActions);
    });
});

describe('logout', () => {
    test('logout', () => {
        const actionCreator = logout();
        const expectedActions = [{
            type: LOGOUT
        }];
        return global.testDispatch(actionCreator, expectedActions);
    });
});

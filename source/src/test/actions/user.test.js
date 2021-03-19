// @scripts
import { config } from '../../config';

import {
    LOGIN,
    LOGOUT,
    login,
    logout
} from '../../actions';

test('login (http request success)', () => {
    const credentials = {
        email: config.settings.serviceMocker.loginUserName,
        password: config.settings.serviceMocker.loginPassword

    };
    const actionCreator = login(credentials);
    const expectedActions = [{
        type: LOGIN,
        payload: {
            authToken: config.mockData.security.user.authToken,
            email: config.mockData.security.user.email,
            id: config.mockData.security.user.id,
            name: config.mockData.security.user.name,
            password: config.mockData.security.user.password,
            userName: config.mockData.security.user.userName
        }
    }];
    return global.testDispatch(actionCreator, expectedActions);
});

test('login (http request fails)', () => {
    const credentials = {
        userName: config.settings.serviceMocker.loginUserName,
        password: config.settings.serviceMocker.loginPassword
    };
    const actionCreator = login(credentials);
    const expectedActions = [];
    return global.testDispatchWithNetworkError(actionCreator, expectedActions);
});

test('logout', () => {
    const actionCreator = logout();
    const expectedActions = [{
        type: LOGOUT
    }];
    return global.testDispatch(actionCreator, expectedActions);
});

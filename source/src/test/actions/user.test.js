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
        payload: config.mockData.security.user
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

// @scripts
import { LOGIN } from '../../actions';
import { config } from '../../config';
import { userReducer } from '../../reducers/user';

test('userReducer: LOGIN', () => {
    const payload = {
        authToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiU3RhbmRhcmQiLCJlbWFpbCI6IkNvdm9mZXR5bWFAU2Vpc21vcy5jb20iLCJ1bmlxdWVfbmFtZSI6IlNIYWVxYXBvIiwibmFtZWlkIjoiNzQ5MjQxMGMtZWY2MC00MTdiLTgyZWYtZjA0YmQ1ZGI2NmIzIiwibmJmIjoxNTgzNTA4MjAxLCJleHAiOjE1ODM1MTAwMDEsImlhdCI6MTU4MzUwODIwMSwiaXNzIjoiU2Vpc21vcyIsImF1ZCI6IkF1ZGllbmNlIn0.tIFYJYf8CYsTpxdNhSjgfNNgnQtW96w5uyN-2PE0lON-Lbi7DJJH_QwODD7YVNFUy0mR9H0Hd75g40tCCT7WkRCFk-mcERULYnRB_1xLer_b5UD9WM1-Xer7XFjb6tWP6V5anNOZXaGlcsAGkxM4YtJqq_54EVV1QMlTTU9x6MNeUAOZFglQTjeB33I21HOfDndqvEMs0NqkRxqDAJAcxzbOedlgZb6dPWah2DQ7orx711tL1Bbx7XNETCbMnGxKZ02towBMDHX-TwOlr4pxoOnkMfd2Y-Endeaew-PKFbGjM-RMkIG_LXcjhaohPeQF74-n0kfAyQJP9kUp1FasGQ',
        email: 'user@flowos.com',
        id: '123',
        name: 'Celerik',
        password: '123',
        userName: 'TestUser123'
    };
    const action = {
        type: LOGIN,
        payload
    };
    const newState = userReducer(config.initialState.user, action);
    const expectedState = Object.assign({}, config.initialState.user, {
        account: {
            authToken: payload.authToken,
            email: payload.email,
            name: payload.name,
            id: payload.id,
            password: payload.password,
            userName: payload.userName
        }
    });
    expect(newState).toEqual(expectedState);
});

test('userReducer: DEFAULT', () => {
    const initialState = {
        account: {
            authToken: '91AE2B60-A22E-43BA-B550-5D459A6A5F92',
            name: 'Admin',
            email: 'user@email.com',
            id: '123456',
            password: '65432',
            userName: 'testing'
        }
    };
    const action = {
        type: 'UNLISTENED_ACTION'
    };
    const newState = userReducer(initialState, action);
    expect(newState).toEqual(initialState);
});

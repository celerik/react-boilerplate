// @scripts
import { LOGIN } from '../../actions';
import { config } from '../../config';
import { userReducer } from '../../reducers/user';

describe('userReducer', () => {
    test('userReducer: LOGIN', () => {
        const payload = config.mockData.security.user;
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
        const initialState = config.initialState.user;
        const action = {
            type: 'UNLISTENED_ACTION'
        };
        const newState = userReducer(initialState, action);
        expect(newState).toEqual(initialState);
    });
});
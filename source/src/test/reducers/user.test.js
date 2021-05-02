// @scripts
import {
    GET_TEAMS,
    LOGIN,
    LOGOUT,
    SET_SELECTED_TEAM
} from '../../actions';
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
                permissions: payload.permissions
            }
        });
        expect(newState).toEqual(expectedState);
    });

    test('userReducer: LOGOUT', () => {
        const payload = config.mockData.security.user;
        const action = {
            type: LOGOUT,
            payload
        };
        const newState = userReducer(config.initialState.user, action);
        const expectedState = Object.assign({}, config.initialState.user, {
            account: config.initialState.user.account
        });
        expect(newState).toEqual(expectedState);
    });

    test('userReducer: SET_SELECTED_TEAM', () => {
        const payload = config.mockData.teams[0].teamId;
        const action = {
            type: SET_SELECTED_TEAM,
            payload
        };
        const newState = userReducer(config.initialState.user, action);
        const expectedState = { ...config.initialState.user, selectedTeam: payload };
        expect(newState).toEqual(expectedState);
    });

    test('userReducer: GET_TEAMS', () => {
        const payload = config.mockData.teams;
        const action = {
            type: GET_TEAMS,
            payload
        };
        const newState = userReducer(config.initialState.user, action);
        const expectedState = {
            ...config.initialState.user,
            teams: payload,
            selectedTeam: payload[0].teamId
        };
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

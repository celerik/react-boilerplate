// @packages
import { combineReducers } from 'redux';

// @scripts
import { LOGIN } from '../actions';
import { config } from '../config';

/**
 * @return {{
 *  authToken: string,
 *  clientId: string,
 *  displayName: string,
 *  permissions: string,
 *  userId: string,
 *  userName: string
 * }}
 */
const accountReducer = (
    state = config.initialState.user, action
) => {
    switch (action.type) {
        case LOGIN:
            return action.payload;
        default:
            return state;
    }
};

export const userReducer = combineReducers({
    account: accountReducer
});

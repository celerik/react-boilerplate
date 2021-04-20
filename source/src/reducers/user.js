// @packages
import { combineReducers } from 'redux';

// @scripts
import { LOGIN, LOGOUT } from '../actions';
import { GET_TEAMS, SET_SELECTED_TEAM } from '../actions/teams';
import { config } from '../config';

/**
 * @return {{
 *  authToken: string,
 *  id: string,
 *  name: string,
 *  email: string,
 *  password: string
 * }}
 */
const accountReducer = (
    state = config.initialState.user.account, action
) => {
    switch (action.type) {
        case LOGIN:
            return action.payload;
        case LOGOUT:
            return config.initialState.user.account;
        default:
            return state;
    }
};

const selectedTeamReducer = (
    state = config.initialState.user.selectedTeam, action
) => {
    switch (action.type) {
        case GET_TEAMS:
            return action.payload[0].teamId;
        case SET_SELECTED_TEAM:
            return action.payload;
        default:
            return state;
    }
};

const teamsReducer = (
    state = config.initialState.user.teams, action
) => {
    switch (action.type) {
        case GET_TEAMS:
            return action.payload;
        default:
            return state;
    }
};

export const userReducer = combineReducers({
    account: accountReducer,
    selectedTeam: selectedTeamReducer,
    teams: teamsReducer
});

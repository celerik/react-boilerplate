// @packages
import { combineReducers } from 'redux';

// @scripts
import {
    GET_ROUTES,
    SET_SELECTED_ROUTER
} from '../actions/teams';
import { config } from '../config';

const selectedRouteReducer = (
    state = config.initialState.team.selectedRoute, action
) => {
    switch (action.type) {
        case SET_SELECTED_ROUTER:
            return action.payload;
        default:
            return state;
    }
};

const routesReducer = (
    state = config.initialState.team.routes, action
) => {
    switch (action.type) {
        case GET_ROUTES:
            return action.payload;
        default:
            return state;
    }
};

export const teamReducer = combineReducers({
    routes: routesReducer,
    selectedRoute: selectedRouteReducer
});

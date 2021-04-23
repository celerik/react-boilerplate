// @packages
import { combineReducers } from 'redux';

// @scripts
import { LOGOUT } from '../actions';
import { alertNotificationReducer } from './alert-notification';
import { mapReducer } from './map';
import { projectsReducer } from './projects';
import { routesReducer } from './routes';
import { servicePatternsReducer } from './service-patterns';
import { userReducer } from './user';

const appReducer = combineReducers({
    alert: alertNotificationReducer,
    projects: projectsReducer,
    map: mapReducer,
    routes: routesReducer,
    servicePatterns: servicePatternsReducer,
    user: userReducer
});

/**
 * We wrap the appReducer into this rootReducer in order to easily
 * handle the LOGOUT event, on which we should reset the state back
 * to the to initial state.
 * @param {Object} state - Current application state.
 * @param {Object} action - Current dispatched action.
 * @return {Object}
 */
export const rootReducer = (state, action) => {
    const currentState = (action.type === LOGOUT)
        ? undefined
        : state;
    return appReducer(currentState, action);
};

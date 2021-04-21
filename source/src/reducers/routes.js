// @scripts
import {
    GET_ROUTES
} from '../actions/routes';
import { config } from '../config';

export const routesReducer = (
    state = config.initialState.routes, action
) => {
    switch (action.type) {
        case GET_ROUTES:
            return action.payload;
        default:
            return state;
    }
};

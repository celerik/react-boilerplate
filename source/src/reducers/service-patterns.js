// @actions
import { GET_SERVICE_PATTERNS } from '../actions/service-patterns';

// @scripts
import { config } from '../config';

export const servicePatternsReducer = (
    state = config.initialState.servicePatterns, action
) => {
    switch (action.type) {
        case GET_SERVICE_PATTERNS:
            return action.payload;
        default:
            return state;
    }
};

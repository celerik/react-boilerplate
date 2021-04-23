// @actions
import { SET_MAP_SERVICE_PATTERNS } from '../actions';
import { combineReducers } from 'redux';
import { config } from '../config';

const servicePatternsReducer = (
    state = config.initialState.map.servicePatterns, action
) => {
    switch (action.type) {
        case SET_MAP_SERVICE_PATTERNS:
            return action.payload;
        default:
            return state;
    }
};

export const mapReducer = combineReducers({
    servicePatterns: servicePatternsReducer
});

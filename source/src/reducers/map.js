// @actions
import {
    SET_MAP_HISTORY_PATHS,
    SET_MAP_SERVICE_PATTERNS,
    SET_MAP_STOPS
} from '../actions';
import { combineReducers } from 'redux';
import { config } from '../config';

const historyPathsReducer = (
    state = config.initialState.map.historyPaths, action
) => {
    switch (action.type) {
        case SET_MAP_HISTORY_PATHS:
            return action.payload;
        default:
            return state;
    }
};

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

const stopsReducer = (
    state = config.initialState.map.stops, action
) => {
    switch (action.type) {
        case SET_MAP_STOPS:
            return action.payload;
        default:
            return state;
    }
};

export const mapReducer = combineReducers({
    historyPaths: historyPathsReducer,
    servicePatterns: servicePatternsReducer,
    stops: stopsReducer
});

// @scripts
import {
    SET_MAP_HISTORY_PATHS,
    SET_MAP_SERVICE_PATTERNS,
    SET_MAP_STOPS
} from '../../actions';
import { config } from '../../config';
import { mapReducer } from '../../reducers/map';

describe('mapReducer', () => {
    test('mapReducer: SET_HISTORY_PATHS', () => {
        const payload = config.mockData.historyPaths;
        const action = {
            type: SET_MAP_HISTORY_PATHS,
            payload
        };

        const newState = mapReducer(config.initialState.map, action);
        const expectedState = {
            ...config.initialState.map,
            historyPaths: payload
        };

        expect(newState).toEqual(expectedState);
    });

    test('mapReducer: SET_MAP_STOPS', () => {
        const payload = [
            {
                stopId: 1,
                stopName: 'Stop 1'
            },
            {
                stopId: 2,
                stopName: 'Stop 2'
            }
        ];
        const action = {
            type: SET_MAP_STOPS,
            payload
        };
        const newState = mapReducer(config.initialState.map, action);
        const expectedState = {
            ...config.initialState.map,
            stops: action.payload
        };
        expect(newState).toEqual(expectedState);
    });

    test('mapReducer: SET_MAP_SERVICE_PATTERNS', () => {
        const payload = config.mockData.servicePatternsDetailed;
        const action = {
            type: SET_MAP_SERVICE_PATTERNS,
            payload
        };
        const newState = mapReducer(config.initialState.map, action);
        const expectedState = {
            ...config.initialState.map,
            servicePatterns: action.payload
        };
        expect(newState).toEqual(expectedState);
    });

    test('mapReducer: DEFAULT', () => {
        const initialState = config.initialState.map;
        const action = {
            type: 'UNLISTENED_ACTION'
        };
        const newState = mapReducer(initialState, action);
        expect(newState).toEqual(initialState);
    });
});

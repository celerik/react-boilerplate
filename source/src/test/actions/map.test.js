// @scripts section
import { config } from '../../config';
import {
    SET_MAP_STOPS,
    SET_MAP_SERVICE_PATTERNS,
    setMapServicePatterns,
    setMapStops
} from '../../actions/map';

describe('mapStops', () => {
    test('setStops', () => {
        const stops = [
            {
                stopId: 1,
                stopName: 'Stop 1'
            },
            {
                stopId: 2,
                stopName: 'Stop 2'
            }
        ];
        const actionCreator = setMapStops(stops);
        const expectedAction = [{
            type: SET_MAP_STOPS,
            payload: stops
        }];
        return global.testDispatch(actionCreator, expectedAction);
    });
});

describe('mapServicePatterns', () => {
    test('setMapServicePatterns', () => {
        const actionCreator = setMapServicePatterns(config.mockData.servicePatterns);
        const expectedAction = [{
            type: SET_MAP_SERVICE_PATTERNS,
            payload: config.mockData.servicePatterns
        }];
        return global.testDispatch(actionCreator, expectedAction);
    });
});

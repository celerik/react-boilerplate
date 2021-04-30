// @scripts
import { GET_SERVICE_PATTERNS } from '../../actions';
import { config } from '../../config';
import { servicePatternsReducer } from '../../reducers/service-patterns';

// @constants
const initialState = config.initialState.servicePatterns;

describe('servicePatternsReducer', () => {
    test('servicePatternsReducer: GET_SERVICE_PATTERNS', () => {
        const payload = config.mockData.servicePatterns;
        const action = {
            type: GET_SERVICE_PATTERNS,
            payload
        };
        const newState = servicePatternsReducer(initialState, action);
        const expectedState = action.payload;
        expect(newState).toEqual(expectedState);
    });

    test('userReducer: DEFAULT', () => {
        const action = {
            type: 'UNLISTENED_ACTION'
        };
        const newState = servicePatternsReducer(initialState, action);
        expect(newState).toEqual(initialState);
    });
});

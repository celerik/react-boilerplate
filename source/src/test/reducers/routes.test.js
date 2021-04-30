// @scripts
import {
    GET_ROUTES
} from '../../actions/routes';
import { config } from '../../config';
import { routesReducer } from '../../reducers/routes';

// @constants
const initialState = config.initialState.routes;

describe('routesReducer', () => {
    test('routesReducer: GET_ROUTES', () => {
        const payload = config.mockData.routes;
        const action = {
            type: GET_ROUTES,
            payload
        };
        const newState = routesReducer(initialState, action);
        const expectedState = action.payload;
        expect(newState).toEqual(expectedState);
    });

    test('routesReducer: DEFAULT', () => {
        const { initialState } = config;
        const action = {
            type: 'UNLISTENED_ACTION'
        };
        const newState = routesReducer(initialState, action);
        expect(newState).toEqual(initialState);
    });
});

// @scripts section
import { config } from '../../config';
import { getRoutes, GET_ROUTES } from '../../actions/routes';

describe('getRoutes', () => {
    test('getRoutes (HTTP SUCCESS)', async () => {
        const actionCreator = getRoutes();

        const expectedAction = [{
            type: GET_ROUTES,
            payload: config.mockData.routes
        }];

        return global.testDispatch(actionCreator, expectedAction);
    });

    test('getRoutes (HTTP ERROR)', () => {
        const actionCreator = getRoutes();
        const expectedAction = [];

        return global.testDispatchWithNetworkError(actionCreator, expectedAction);
    });
});

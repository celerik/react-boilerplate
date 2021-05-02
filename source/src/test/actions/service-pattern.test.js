// @scripts section
import { config } from '../../config';
import { getServicePatterns, GET_SERVICE_PATTERNS } from '../../actions/service-patterns';

describe('getServicePatterns', () => {
    test('getServicePatterns (HTTP SUCCESS)', async () => {
        const projectId = 123456;
        const actionCreator = getServicePatterns(projectId);

        const expectedAction = [{
            type: GET_SERVICE_PATTERNS,
            payload: config.mockData.servicePatterns
        }];

        return global.testDispatch(actionCreator, expectedAction);
    });

    test('getServicePatterns (HTTP ERROR)', () => {
        const actionCreator = getServicePatterns();
        const expectedAction = [];

        return global.testDispatchWithNetworkError(actionCreator, expectedAction);
    });
});

// @scripts section
import { config } from '../../config';
import { getProjects, cloneProject, GET_PROJECTS } from '../../actions/projects';

describe('getProjects', () => {
    test('getProjects (HTTP SUCCESS)', () => {
        const actionCreator = getProjects();

        const expectedAction = [{
            type: GET_PROJECTS,
            payload: config.mockData.projects
        }];

        return global.testDispatch(actionCreator, expectedAction);
    });

    test('getProjects (HTTP ERROR)', () => {
        const actionCreator = getProjects();
        const expectedAction = [];
        return global.testDispatchWithNetworkError(actionCreator, expectedAction);
    });
});

describe('cloneProject', () => {
    test('cloneProject (HTTP ERROR)', () => {
        const data = {
            projectId: 1,
            projectName: 'Testing'
        };
        const actionCreator = getProjects(data);
        const expectedAction = [];
        return global.testDispatchWithNetworkError(actionCreator, expectedAction);
    });
});

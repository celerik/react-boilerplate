// @scripts section
import { config } from '../../config';
import {
    GET_PROJECTS,
    cloneProject,
    getProjects
} from '../../actions/projects';

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
        const actionCreator = cloneProject(data);
        const expectedAction = [];

        return global.testDispatchWithNetworkError(actionCreator, expectedAction);
    });
});

import { config } from '../../config';
import { getProjects, GET_PROJECTS } from '../../actions/projects';

describe('getProjects', () => {
    test('getProjects (HTTP SUCCESS)', () => {
        const actionCreator = getProjects();

        const expectedAction = {
            payload: config.mockData.projects,
            type: GET_PROJECTS
        };

        return global.testDispatch(actionCreator, [expectedAction]);
    });

});
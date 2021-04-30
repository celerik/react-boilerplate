// @scripts
import {
    GET_PROJECTS
} from '../../actions/projects';
import { config } from '../../config';
import { projectsReducer } from '../../reducers/projects';

// @constants
const initialState = config.initialState.projects;

describe('projectsReducer', () => {
    test('projectsReducer: GET_ROUTES', () => {
        const payload = config.mockData.projects;
        const action = {
            type: GET_PROJECTS,
            payload
        };
        const newState = projectsReducer(initialState, action);
        const expectedState = action.payload;
        expect(newState).toEqual(expectedState);
    });

    test('projectsReducer: DEFAULT', () => {
        const { initialState } = config;
        const action = {
            type: 'UNLISTENED_ACTION'
        };
        const newState = projectsReducer(initialState, action);
        expect(newState).toEqual(initialState);
    });
});

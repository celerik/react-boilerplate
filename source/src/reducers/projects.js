// @packages
import { GET_PROJECTS } from '../actions/projects';
import { config } from '../config';

export const projectsReducer = (
    state = config.initialState.projects, action
) => {
    switch (action.type) {
        case GET_PROJECTS:
            return action.payload;
        default:
            return state;
    }
};

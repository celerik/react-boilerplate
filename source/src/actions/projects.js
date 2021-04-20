// @packages
import axios from 'axios';
import { config } from '../config';

// @actions
export const GET_PROJECTS = 'GET_PROJECTS';

export const getProjects = () =>
    async (dispatch, getState) => {
        const { selectedTeam } = getState().user;
        const projects = await axios.get(config.services.projects.get, {
            params: {
                team: selectedTeam
            }
        });

        dispatch({
            type: GET_PROJECTS,
            payload: projects
        });
    };

export const cloneProject = ({ projectId }) =>
    (dispatch) => {
        axios.post(format(config.services.projects.clone, projectId))
            .then(() => getProjects()(dispatch))
            .catch(Promise.reject);
    };

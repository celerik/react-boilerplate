// @packages
import axios from 'axios';
import { config } from '../config';
import { format } from '../util/string';

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

        if (!projects) {
            return;
        }

        dispatch({
            type: GET_PROJECTS,
            payload: projects
        });
    };

export const cloneProject = ({ projectId, projectName }) =>
    async (dispatch, getState) => {
        await axios.post(format(config.services.projects.clone, projectId), {
            projectName: `${projectName} ${config.text.projectMenu.copy}`
        });
        await getProjects()(dispatch, getState);
    };

// @packages
import axios from 'axios';
import { config } from '../config';

// @actions
export const GET_PROJECTS = 'GET_PROJECTS';

export const getProjects = () =>
    async (dispatch) => {
        const projects = await axios.get(config.services.projects.get + '?team=60758feed538ddcd58979977');

        dispatch({
            type: GET_PROJECTS,
            payload: projects.data
        });
    };

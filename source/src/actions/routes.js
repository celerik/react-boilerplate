// @packages
import axios from 'axios';

// @scripts
import { config } from '../config';
import { format } from '../util/string';

// @actions
export const GET_ROUTES = 'GET_ROUTES';

export const getRoutes = () =>
    async (dispatch, getState) => {
        const { selectedTeam } = getState().user;
        const routes = await axios.get(format(config.services.routes.getRoutes, selectedTeam));

        if (!routes) {
            return;
        }

        dispatch({
            type: GET_ROUTES,
            payload: routes
        });
    };

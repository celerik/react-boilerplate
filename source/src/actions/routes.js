// @packages
import BaselineConnect from '../services/baseline-connect';

// @actions
export const GET_ROUTES = 'GET_ROUTES';

export const getRoutes = () =>
    async (dispatch, getState) => {
        const { selectedTeam } = getState().user;
        const routes = await BaselineConnect.getRoutes(selectedTeam);
        dispatch({
            type: GET_ROUTES,
            payload: routes
        });
    };

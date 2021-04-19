// @packages
import axios from 'axios';
import { config } from '../config';
import { format } from '../util/string';

// @actions
export const GET_ROUTES = 'GET_ROUTES';
export const GET_TEAMS = 'GET_TEAMS';
export const SET_SELECTED_ROUTER = 'SET_SELECTED_ROUTER';
export const SET_SELECTED_TEAM = 'SET_SELECTED_TEAM';

export const getRoutes = () =>
    async (dispatch, getState) => {
        const { selectedTeam } = getState().user;
        const routes = await axios.get(format(config.services.routes.getRoutes, selectedTeam));
        dispatch({
            type: GET_ROUTES,
            payload: routes
        });
    };

export const getTeams = () =>
    async (dispatch) => {
        const teams = await axios.get(config.services.teams.get);

        dispatch({
            type: GET_TEAMS,
            payload: teams
        });
    };

/**
 * @param {String|Number} selectedRouterId
 */
export const setSelectedRouter = (selectedRouterId) => ({
    type: SET_SELECTED_ROUTER,
    payload: selectedRouterId
});

/**
 * @param {String|Number} selectedTeamId
 */
export const setSelectedTeam = (selectedTeamId) => ({
    type: SET_SELECTED_TEAM,
    payload: selectedTeamId
});

// @packages
import axios from 'axios';
import { config } from '../config';

// @actions
export const GET_TEAMS = 'GET_TEAMS';
export const SET_SELECTED_TEAM = 'SET_SELECTED_TEAM';

export const getTeams = () =>
    async (dispatch) => {
        const teams = await axios.get(config.services.teams.get);

        dispatch({
            type: GET_TEAMS,
            payload: teams.data
        });
    };

/**
 * @param {String|Number} selectedTeamId
 */
export const setSelectedTeam = (selectedTeamId) => ({
    type: SET_SELECTED_TEAM,
    payload: selectedTeamId
});

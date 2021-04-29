// @scripts section
import { config } from '../../config';
import {
    GET_TEAMS,
    SET_SELECTED_TEAM,
    getTeams,
    setSelectedTeam
} from '../../actions/teams';

describe('getTeams', () => {
    test('getTeams (HTTP SUCCESS)', async () => {
        const actionCreator = getTeams();

        const expectedAction = [{
            type: GET_TEAMS,
            payload: config.mockData.teams
        }];
        return global.testDispatch(actionCreator, expectedAction);
    });

    test('getTeams (HTTP ERROR)', () => {
        const actionCreator = getTeams();
        const expectedAction = [];
        return global.testDispatchWithNetworkError(actionCreator, expectedAction);
    });
});

describe('setSelected', () => {
    test('setSelectedTeam', async () => {
        const selectedTeam = 1;
        const actionCreator = setSelectedTeam(selectedTeam);

        const expectedAction = [{
            type: SET_SELECTED_TEAM,
            payload: selectedTeam
        }];
        return global.testDispatch(actionCreator, expectedAction);
    });
});

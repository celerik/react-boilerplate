// @scripts
import { useStopsDispatch } from '.';
import { config } from '../../config';

// @actions
export const SET_ACTIVE_ACTION = 'SET_ACTIVE_ACTION';
export const SET_ACTIVE_PATHS = 'SET_ACTIVE_PATHS';
export const SET_ACTIVE_STOPS = 'SET_ACTIVE_STOPS';

export const useSetActiveAction = () => {
    const dispatch = useStopsDispatch();

    const setActiveAction = (stopId, action) => {
        const avaliableOptions = Object.values(config.masterData.stopActions).map(action => action.name);

        if (avaliableOptions.includes(action)) {
            dispatch({
                type: SET_ACTIVE_ACTION,
                payload: {
                    stopId,
                    action
                }
            });
        }
    };

    return setActiveAction;
};

export const useSetActiveStops = () => {
    const dispatch = useStopsDispatch();

    const setActiveStops = (stops) => dispatch({
        type: SET_ACTIVE_STOPS,
        payload: stops
    });

    return setActiveStops;
};

export const useSetActivePaths = () => {
    const dispatch = useStopsDispatch();

    const setActivePaths = (paths) => dispatch({
        type: SET_ACTIVE_PATHS,
        payload: paths
    });

    return setActivePaths;
};

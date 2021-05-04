// @scripts
import { useStopsDispatch } from '.';

// @actions
export const SET_ACTIVE_PATHS = 'SET_ACTIVE_PATHS';
export const SET_ACTIVE_STOPS = 'SET_ACTIVE_STOPS';

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

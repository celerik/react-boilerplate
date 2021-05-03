import { useStopsDispatch } from ".";

// @actions
export const SET_ACTIVE_STOP = 'SET_ACTIVE_STOP';

export const setActiveStops = () => {
    const dispatch = useStopsDispatch();

    const setActiveStops = (stops) => dispatch({
        type: SET_ACTIVE_STOP,
        payload: stops
    });

    return setActiveStops;
};
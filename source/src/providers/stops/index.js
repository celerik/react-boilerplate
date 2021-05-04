// @packages
import React, { createContext, useContext, useReducer } from 'react';
import { SET_ACTIVE_PATHS, SET_ACTIVE_STOPS } from './actions';

// @constants
const StopsContext = createContext();
const StopsDispatchContext = createContext();
const initialState = {
    activePaths: [],
    activeStops: []
};

const stopsReducer = (state, action) => {
    switch (action.type) {
        case SET_ACTIVE_PATHS:
            return { ...state, activePaths: action.payload };
        case SET_ACTIVE_STOPS:
            return { ...state, activeStops: action.payload };
        default:
            return state;
    }
};

// eslint-disable-next-line react/prop-types
export const StopsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(stopsReducer, initialState);

    return (
        <StopsContext.Provider value={state}>
            <StopsDispatchContext.Provider value={dispatch}>
                {children}
            </StopsDispatchContext.Provider>
        </StopsContext.Provider>
    );
};

export const useStopsContext = () => {
    const context = useContext(StopsContext);

    if (!context) {
        throw new Error('useStopsContext should be invoked within a StopsProvider');
    }

    return context;
};

export const useStopsDispatch = () => {
    const context = useContext(StopsDispatchContext);

    if (!context) {
        throw new Error('useStopsDispatch should be invoked within a StopsProvider');
    }

    return context;
};

export const useStops = () => [useStopsContext, useStopsDispatch];

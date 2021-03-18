// @packages
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk" 

// @scripts
import { rootReducer } from '../reducers';
 
export const initializeReduxStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
    return store;
};
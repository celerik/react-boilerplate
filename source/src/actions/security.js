// @packages
import axios from 'axios';

// @scripts
import { config } from '../config';

// @constants
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

/**
 * @param {string} userName
 * @param {string} password
 */
export const login = ({ email, password }) => dispatch => axios 
    .post(config.services.security.login, {
        password,
        email
    })
    .then((response) => {
        dispatch ({
            type: LOGIN,
            payload: response.data
        })
        return response
    })
    .catch(Promise.reject);


export const logout = () =>
    ({
        type: LOGOUT
    });


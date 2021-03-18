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
export const login = ({ email, password }) => axios 
        .post(config.services.security.login, {
            password,
            email
        })
        .then((response) => {
            console.log('JAJAJAJAJA', response)
            return {
                type: LOGIN,
                payload: response.data
            }
        })
        .catch(() => {
            console.log('el rquest', config.services.security.login)
            console.log('EFEEEEE', email, password)
            Promise.reject(config.text.dashboardPage.helloWorld)});

export const logout = () =>
    ({
        type: LOGOUT
    });


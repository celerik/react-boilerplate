// @constants
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

/**
 * @param {string} authToken
 * @param {string} email
 * @param {string} name
 */
export const loginWithGoogle = ({
    authToken,
    email,
    name
}) => ({
    type: LOGIN,
    payload: {
        authToken,
        email,
        name,
        permissions: [
            'Dashboard'
        ]
    }
});

export const logout = () => ({
    type: LOGOUT
});

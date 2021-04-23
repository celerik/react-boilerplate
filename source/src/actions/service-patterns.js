// @packages
import axios from 'axios';
import { config } from '../config';
import { format } from '../util/string';

// @actions
export const GET_SERVICE_PATTERNS = 'GET_SERVICE_PATTERNS';

/**
 * @param {String} param0
 */
export const getServicePatterns = ({ projectId }) =>
    async (dispatch) => {
        const servicePatterns = await axios.get(format(config.services.servicePatterns.get, projectId));

        dispatch({
            type: GET_SERVICE_PATTERNS,
            payload: servicePatterns
        });

        return servicePatterns;
    };

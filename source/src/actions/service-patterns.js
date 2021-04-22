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

        const servicesPatternsDetailsRequests = servicePatterns.map(servicePattern => new Promise(
            (resolve, reject) => axios.get(format(
                config.services.servicePatterns.getOne,
                projectId,
                servicePattern.servicePatternId
            ))
                .then(response => resolve({
                    ...servicePattern,
                    ...response
                }))
                .catch(reject)
        ));

        const servicePatternsDetailed = await Promise.all(servicesPatternsDetailsRequests);

        dispatch({
            type: GET_SERVICE_PATTERNS,
            payload: servicePatternsDetailed
        });

        return servicePatterns;
    };

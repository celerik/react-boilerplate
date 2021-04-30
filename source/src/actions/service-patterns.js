// @packages
import Project from '../services/project';

// @actions
export const GET_SERVICE_PATTERNS = 'GET_SERVICE_PATTERNS';

/**
 * @param {String} param0
 */
export const getServicePatterns = (projectId) =>
    async (dispatch) => {
        const servicePatterns = await Project.getServicePatterns(projectId);

        if (!servicePatterns) {
            return null;
        }

        dispatch({
            type: GET_SERVICE_PATTERNS,
            payload: servicePatterns
        });

        return servicePatterns;
    };

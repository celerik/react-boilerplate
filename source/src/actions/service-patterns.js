// @packages
import Project from '../services/project';

// @actions
export const GET_SERVICE_PATTERNS = 'GET_SERVICE_PATTERNS';

/**
 * @param {String} param0
 */
export const getServicePatterns = (projectId) =>
    async (dispatch) => {
        try {
            const servicePatterns = await Project.getServicePatterns(projectId);
    
            dispatch({
                type: GET_SERVICE_PATTERNS,
                payload: servicePatterns
            });
    
            return servicePatterns;
        } catch (error) {
            throw error;
        }
    };

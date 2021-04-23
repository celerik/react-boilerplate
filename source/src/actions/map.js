// @types
export const SET_MAP_SERVICE_PATTERNS = 'SET_MAP_SERVICE_PATTERNS';

/**
 * @param {Array} servicePatterns
 */
export const setMapServicePatterns = (servicePatterns) => ({
    type: SET_MAP_SERVICE_PATTERNS,
    payload: servicePatterns
});

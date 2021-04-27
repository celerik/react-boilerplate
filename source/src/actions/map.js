// @types
export const SET_MAP_SERVICE_PATTERNS = 'SET_MAP_SERVICE_PATTERNS';
export const SET_MAP_STOPS = 'SET_MAP_STOPS';

/**
 * @param {Array[GeoJSON] || FeatureCollection} servicePatterns
 */
export const setMapServicePatterns = (servicePatterns) => ({
    type: SET_MAP_SERVICE_PATTERNS,
    payload: servicePatterns
});

/**
 * @param {Array[GeoJSON] || FeatureCollection} routes
 */
export const setMapStops = (stops) => ({
    type: SET_MAP_STOPS,
    payload: stops
});

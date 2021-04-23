/**
 * @param {String} pathGeometry
 * @param {String} pathId
 */
export const formatSegmentsPath = ({
    pathGeometry,
    pathId
}) => {
    const [geometryType, strCoordinates] = pathGeometry.replace(')', ', ').split('(');
    const coordinates = strCoordinates.split(',')
        .map((item) => item.replace(/^\s|\s$/, '').split(/\s/).map(Number));
    const removedDuplicated = [...new Set(coordinates.map(JSON.stringify))];

    return {
        coordinates: Array.from(removedDuplicated, JSON.parse),
        geometryType,
        pathId
    };
};

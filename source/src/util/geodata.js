/**
 * @param {String} pathGeometry
 * @param {String} pathId
 */
export const formatSegmentsPath = ({
    pathGeometry,
    pathId
}) => {
    const [geometryType, strCoordinates] = pathGeometry.replace(')', ', ').split('(');
    const splittedCoords = strCoordinates.split(',');
    splittedCoords.pop();
    const coordinates = splittedCoords
        .map((item) => item.replace(/^\s|\s$/, '').split(/\s/).map(Number))
        .filter(item => item.length);

    return {
        coordinates,
        geometryType,
        pathId
    };
};

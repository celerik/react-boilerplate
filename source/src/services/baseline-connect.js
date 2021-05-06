// @packages
import axios from 'axios';
import { parse as parseWkt } from 'wkt';

// @scripts
import { config } from '../config';
import { globalUI } from '../core';
import { format } from '../util';

class BaselineConnect {
    static async getHistoryPaths(from, to) {
        try {
            const paths = await axios.get(
                config.services.baselineConnect.getHistoryPaths,
                { params: { from, to } }
            );

            const pathsGeoJSON = paths.map(path => ({
                type: 'Feature',
                properties: {
                    pathId: path.pathId
                },
                geometry: {
                    type: 'LineString',
                    coordinates: parseWkt(path.pathGeometry).coordinates
                }
            }));

            return [paths, pathsGeoJSON];
        } catch (error) {
            globalUI.showAlertNotificationError(
                config.text.services.baselineConnect.historyPaths,
                error.message
            );

            return error;
        }
    }

    static async getRoutes(teamId) {
        const routes = await axios.get(format(config.services.routes.getRoutes, teamId));
        return routes;
    }

    static async getRoutesDateRanges(teamId, routeId) {
        const dateRanges = await axios.get(
            format(config.services.routes.getDateRanges, teamId, routeId)
        );

        return dateRanges;
    }

    static async getRouteServicePatterns(teamId, routeId, date) {
        const servicePatterns = await axios.get(
            format(config.services.routes.getServicePatterns, teamId, routeId),
            { params: { date } }
        );

        return servicePatterns;
    }

    static async getStopDetails(stopId) {
        try {
            const stopDetails = await axios.get(
                format(config.services.baselineConnect.getStopDetails, stopId)
            );

            const geometry = {
                type: 'Point',
                coordinates: parseWkt(stopDetails.point).coordinates
            };

            stopDetails.features = [{
                type: 'Feature',
                properties: {
                    stopId
                },
                geometry
            }];

            return stopDetails;
        } catch (error) {
            globalUI.showAlertNotificationError(
                config.text.services.baselineConnect.stopDetails,
                error
            );

            throw error;
        }
    }

    static async getTeamServicePatterns(teamId, servicePatternIds, date) {
        try {
            const servicePatterns = await axios.get(
                format(config.services.baselineConnect.getTeamServicePatterns, teamId),
                {
                    params: {
                        date,
                        servicePatternIds: servicePatternIds.toString()
                    }
                }
            );

            const formatServicePatterns = servicePatterns.map((servicePattern) => {
                const coordinates = servicePattern.segments.flatMap(
                    segment => parseWkt(segment.path.pathGeometry).coordinates
                );

                const pathFeature = {
                    type: 'Feature',
                    properties: {
                        color: servicePattern.colour,
                        name: 'test'
                    },
                    geometry: {
                        type: 'LineString',
                        coordinates
                    }
                };

                const stops = servicePattern.stops.map(stop => {
                    const geometry = {
                        type: 'Point',
                        coordinates: parseWkt(stop.point).coordinates
                    };

                    return {
                        type: 'Feature',
                        properties: {
                            ...stop,
                            color: servicePattern.colour
                        },
                        geometry
                    };
                });

                return {
                    ...servicePattern,
                    features: [
                        pathFeature
                    ],
                    stops
                };
            });

            return formatServicePatterns;
        } catch (error) {
            globalUI.showAlertNotificationError(
                config.text.services.baselineConnect.teamServicePatterns,
                error.message
            );

            return [];
        }
    }
}

export default BaselineConnect;

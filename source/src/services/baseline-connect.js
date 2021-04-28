// @packages
import axios from 'axios';
import { parse as parseWkt } from 'wkt';

// @scripts
import { config } from '../config';
import { globalUI } from '../core';
import { format } from '../util';

class BaselineConnect {
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
                properties: {},
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

            return servicePatterns;
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

// @packages
import axios from 'axios';

// @scripts
import { config } from '../config';
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
}

export default BaselineConnect;

// @packages
import axios from 'axios';
import { parse as parseWkt } from 'wkt';

// @scripts
import { config } from '../config';
import { format } from '../util';
import { globalUI } from '../core';

class Project {
    static async getServicePattern(projectId, servicePatternId) {
        try {
            const servicePattern = await axios.get(
                format(config.services.servicePatterns.getServicePattern, projectId, servicePatternId)
            );

            const coordinates = servicePattern.segments.flatMap(
                segment => parseWkt(segment.path.pathGeometry).coordinates
            );

            const featurePath = {
                type: 'Feature',
                properties: {
                    name: `path-${servicePattern.routeName}`
                },
                geometry: {
                    type: 'LineString',
                    coordinates
                }
            };

            servicePattern.pathGeoJSON = {
                type: 'FeatureCollection',
                features: [featurePath]
            };

            return servicePattern;
        } catch (error) {
            globalUI.showAlertNotificationError(
                config.text.editServicePattern.title,
                config.text.editServicePattern.getServicePatternError
            );

            throw error;
        }
    }

    static async getServicePatterns(projectId) {
        try {
            const servicePatterns = await axios.get(
                format(config.services.projects.getServicePatterns, projectId)
            );

            return servicePatterns;
        } catch (error) {
            globalUI.showAlertNotificationError(
                config.text.services.project.servicePatterns,
                error.message
            );

            throw error;
        }
    }

    static async importServicePatterns(projectId, servicePatterns) {
        try {
            await axios.post(
                format(config.services.projects.importServicePatterns, projectId),
                servicePatterns
            );
        } catch (error) {
            globalUI.showAlertNotificationError(
                config.text.createServicePattern.importServicePatterns,
                config.text.createServicePattern.importedError
            );

            throw error;
        }
    }

    static async updateServicePatternSettings(projectId, servicePatternId, servicePatterns) {
        try {
            await axios.put(
                format(config.services.servicePatterns.settings, projectId, servicePatternId),
                servicePatterns
            );
        } catch (error) {
            globalUI.showAlertNotificationError(
                config.text.editServicePattern.updateServicePattern,
                config.text.editServicePattern.errorUpdatingDays
            );

            throw error;
        }
    }

    static async getProjectsVehicles(projectId) {
        try {
            const projectsVehicles = await axios.get(
                format(config.services.projects.getProjectsVehicles, projectId)
            );

            return projectsVehicles;
        } catch (error) {
            globalUI.showAlertNotificationError(
                config.text.projectMenu.projectVehicles,
                error.message
            );

            throw error;
        }
    }
}

export default Project;

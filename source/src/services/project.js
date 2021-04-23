// @packages
import axios from 'axios';

// @scripts
import { config } from '../config';
import { format } from '../util';
import { globalUI } from '../core';

class Project {
    static async getServicePattern(projectId, servicePatternId) {
        try {
            const servicePatterns = await axios.get(
                format(config.services.servicePatterns.getServicePattern, projectId, servicePatternId)
            );

            return servicePatterns;
        } catch (error) {
            globalUI.showAlertNotificationError(
                config.text.editServicePattern.title,
                config.text.editServicePattern.getServicePatternError
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
}

export default Project;
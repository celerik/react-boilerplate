// @packages
import axios from 'axios';

// @scripts
import { config } from '../config';
import { format } from '../util';
import { globalUI } from '../core';

class Project {
    static async getProjectSettings(projectId) {
        const projectSettings = await axios.get(format(config.services.projects.settings, projectId));

        return projectSettings;
    }

    static async putProjectSettings(projectId, settingsUpdated) {
        try {
            await axios.put(format(config.services.projects.settings, projectId), settingsUpdated);
            globalUI.showAlertNotificationSuccess(
                config.text.projectMenu.projectSettingsModal.projectSettings,
                config.text.projectMenu.projectSettingsModal.settingsSavedSuccessfully
            );
        } catch (error) {
            globalUI.showAlertNotificationError(
                config.text.projectMenu.projectSettingsModal.projectSettings,
                error.message
            );

            throw error;
        }
    }
}

export default Project;

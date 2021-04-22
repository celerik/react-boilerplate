// @packages
import axios from 'axios';

// @scripts
import { config } from '../config';
import { format } from '../util';

class Project {
    static async getProjectSettings(projectId) {
        const projectSettings = await axios.get(format(config.services.projects.settings, projectId));

        return projectSettings;
    }

    static async putProjectSettings(projectId, settingsUpdated) {
        await axios.put(format(config.services.projects.settings, projectId), settingsUpdated);
    }
}

export default Project;

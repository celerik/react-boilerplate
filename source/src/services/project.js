// @packages
import axios from 'axios';

// @scripts
import { config } from '../config';
import { format } from '../util';

class Project {
    static async importServicePatterns(projectId, servicePatterns) {
        axios.post(
            format(config.services.projects.importServicePatterns, projectId),
            servicePatterns
        );
    }
};

export default Project;

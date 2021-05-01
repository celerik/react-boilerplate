// @packages
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core';

// @scripts
import Project from '../../../services/project';
import VehicleTypeCard from '../../atoms/vehicle-types-card';

// @styles
import styles from './styles';

const ProjectsVehiclesList = ({ projectId }) => {
    const [projecsVehicles, setProjecsVehicles] = useState(null);

    useEffect(async () => {
        setProjecsVehicles(await Project.getProjectsVehicles(projectId));
    }, []);

    return (
        <List>
            {projecsVehicles?.map((project, index) => (
                <VehicleTypeCard
                    id={project.id}
                    key={`${project.id}-project-vehicel-${index}`}
                    vehicleTypeName={project.vehicleTypeName}
                    needUpdate={project.deprecated}
                    quantityAvailable={project.quantityAvailable}
                />
            ))}
        </List>
    );
};

ProjectsVehiclesList.propTypes = {
    projectId: PropTypes.string.isRequired
};

export default withStyles(styles)(ProjectsVehiclesList);

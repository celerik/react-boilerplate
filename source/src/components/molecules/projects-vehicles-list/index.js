// @packages
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @scripts
import VehicleTypeCard from '../../atoms/vehicle-types-card';
import projects from '../../../config/mock-data/projects/projects-vehicles.json';

// @styles
import styles from './styles';

const ProjectsVehiclesList = ({ projects }) => (
    <List>
        {projects.map((project, index) => (
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

ProjectsVehiclesList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        vehicleType: PropTypes.string.isRequired
    }))
};

ProjectsVehiclesList.defaultProps = {
    projects
};

export default withStyles(styles)(ProjectsVehiclesList);

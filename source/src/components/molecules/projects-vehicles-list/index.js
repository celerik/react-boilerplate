// @packages
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @scripts
import VehicleTypeCard from '../../atoms/vehicle-types-card';

// @styles
import styles from './styles';

const ProjectsVehiclesList = ({ projectsList }) => (
    <List>
        {projectsList?.map((project, index) => (
            <VehicleTypeCard
                id={index}
                key={index}
                vehicleTypeName={project.vehicleTypeName}
                needUpdate={project.deprecated}
                quantityAvailable={project.quantityAvailable}
            />
        ))}
    </List>
);

ProjectsVehiclesList.propTypes = {
    projectsList: PropTypes.array.isRequired
};

export default withStyles(styles)(ProjectsVehiclesList);

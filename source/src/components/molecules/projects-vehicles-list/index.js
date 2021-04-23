// @packages
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @scripts
import VehicleTypeCard from '../../atoms/vehicle-types-card';

// @styles
import styles from './styles';

const projects = [
    {
        id: '33',
        vehicleType: 'vehicle type 1'
    },
    {
        id: '363',
        vehicleType: 'vehicle type 2'
    },
    {
        id: '336',
        vehicleType: 'vehicle type 3'
    }
];

const ProjectsVehiclesList = ({ projects }) => (
    <List>
        {projects.map(({ id, vehicleType }, index) => (
            <VehicleTypeCard
                key={`${id}-${index}`}
                id={id}
                vehicleType={vehicleType}
            />
        ))}
    </List>
);

ProjectsVehiclesList.propTypes = {
    projects: PropTypes.any
};

ProjectsVehiclesList.defaultProps = {
    projects
};

export default withStyles(styles)(ProjectsVehiclesList);

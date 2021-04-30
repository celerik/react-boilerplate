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
                id={id}
                key={`${id}-${index}`}
                vehicleType={vehicleType}
            />
        ))}
        <VehicleTypeCard
            id="d345"
            vehicleType="vehicle type 4"
            needUpdate
        />
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
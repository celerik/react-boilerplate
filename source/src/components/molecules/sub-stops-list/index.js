// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @script
import Item from '../../atoms/item';

// @styles
import styles from './styles';

const subStops = [
    {
        id: '1',
        nameStop: 'Name stop 2.1'
    },
    {
        id: '2',
        nameStop: 'Name stop 2.2'
    },
    {
        id: '3',
        nameStop: 'Name stop 2.3'
    }
];

const actions = [
    {
        icon: 'add_circle',
        name: 'add',
        onClick: Function.prototype
    }
];

const SubStopsList = ({ actions, classes, subStops }) => (
    <div className={classes.listContainer}>
        {subStops.map(({ id, nameStop }, index) => (
            <Item
                className={classes.item}
                key={`${id}-sub-stop-${index}`}
                text={nameStop}
                iconButtons={actions}
            />
        ))}
    </div>
);

SubStopsList.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    })),
    classes: PropTypes.object.isRequired,
    subStops: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        nameStop: PropTypes.string.isRequired
    }))
};

SubStopsList.defaultProps = {
    actions,
    subStops
};

export default withStyles(styles)(SubStopsList);

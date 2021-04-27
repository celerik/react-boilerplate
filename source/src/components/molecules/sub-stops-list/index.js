// @packages
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const Item = withStyles(styles)(({ nameStop, actions, classes }) => {
    const [actionsVisible, setActionsVisibility] = useState(false);

    const onHover = () => {
        setActionsVisibility(true);
    };

    return (
        <div
            className={classes.item}
            onFocus={onHover}
            onMouseLeave={() => setActionsVisibility(false)}
            onMouseOver={onHover}
        >
            <Typography>{nameStop}</Typography>
            {actionsVisible && actions.map((action) => (
                typeof action.icon === 'string'
                    ? <Icon className={classes.icon}>{action.icon}</Icon>
                    : cloneElement(action.icon)
            ))}
        </div>
    );
});

const SubStopsList = ({ actions, classes, subStops }) => (
    <div className={classes.listContainer}>
        {subStops.map(({ id, nameStop }, index) => (
            <Item
                key={`${id}-${index}`}
                nameStop={nameStop}
                actions={actions}
            />
        ))}
    </div>
);

SubStopsList.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        onclick: PropTypes.func.isRequired
    })).isRequired,
    classes: PropTypes.object.isRequired,
    subStops: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        nameStop: PropTypes.string.isRequired
    })).isRequired
};

Item.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        onclick: PropTypes.func.isRequired
    })).isRequired,
    classes: PropTypes.object.isRequired,
    nameStop: PropTypes.string.isRequired
};

export default withStyles(styles)(SubStopsList);

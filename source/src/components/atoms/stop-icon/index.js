// @packages
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { makeStyles, withStyles } from '@material-ui/core';

// @scripts
import styles from './styles';

const customClasses = makeStyles({
    main: props => ({
        backgroundColor: `${props.color}33`,
        '&:before': {
            backgroundColor: props.color
        },
        '&:after': {
            border: `${props.color} 2px solid`
        }
    })
});

const StopIcon = ({
    classes,
    color,
    id,
    isListItem,
    label
}) => {
    const colorClasses = customClasses({ color });

    return (
        <span
            className={classNames(
                classes.mainContainer,
                colorClasses.main,
                isListItem && classes.listItem
            )}
            id={id}
        >
            {label || <LocationOnIcon />}
        </span>
    );
};

StopIcon.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.string,
    id: PropTypes.string.isRequired,
    isListItem: PropTypes.bool,
    label: PropTypes.string.isRequired
};

StopIcon.defaultProps = {
    color: null,
    isListItem: false
};

export default withStyles(styles)(StopIcon);

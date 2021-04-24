// @packages
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @scripts
import styles from './styles';
import classNames from 'classnames';

const StopIcon = ({
    classes,
    label,
    isListItem,
    id
}) => (
    <span
        className={classNames(
            classes.mainContainer,
            isListItem && classes.listItem
        )}
        id={id}
    >
        {label || <LocationOnIcon />}
    </span>
);

StopIcon.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    isListItem: PropTypes.bool,
    label: PropTypes.string.isRequired
};

StopIcon.defaultProps = {
    isListItem: false
};

export default withStyles(styles)(StopIcon);

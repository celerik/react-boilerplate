// @packages
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

// @scripts
import styles from './styles';

const StopIcon = ({
    classes,
    id,
    isListItem,
    label
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

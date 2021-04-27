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
    className,
    label
}) => (
    <span
        className={classNames(
            classes.mainContainer,
            className
        )}
        id={id}
    >
        {label || <LocationOnIcon />}
    </span>
);

StopIcon.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string.isRequired
};

StopIcon.defaultProps = {
    className: null
};

export default withStyles(styles)(StopIcon);

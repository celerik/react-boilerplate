// @packages
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

// @scripts
import styles from './styles';

const StopIcon = ({
    className,
    classes,
    id,
    label
}) => (
    <span
        className={classNames(
            className,
            classes.mainContainer
        )}
        id={id}
    >
        {label || <LocationOnIcon />}
    </span>
);

StopIcon.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

StopIcon.defaultProps = {
    className: null
};

export default withStyles(styles)(StopIcon);

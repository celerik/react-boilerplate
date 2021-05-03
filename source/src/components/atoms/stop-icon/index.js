// @packages
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { makeStyles, withStyles } from '@material-ui/core';

// @scripts
import styles from './styles';
import { useStops } from '../../../providers/stops';
import { setActiveStops } from '../../../providers/stops/actions';

const customClasses = makeStyles({
    main: props => ({
        backgroundColor: `${props.color} !important`,
        '&:before': {
            border: `${props.color} 2px solid !important`
        }
    })
});

const StopIcon = ({
    className,
    classes,
    color,
    id,
    label
}) => {
    const colorClasses = customClasses({ color });

    return (
        <span
            className={classNames(
                className,
                classes.mainContainer,
                colorClasses.main
            )}
            id={id}
        >
            {label || <LocationOnIcon />}
        </span>
    );
};

StopIcon.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    color: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

StopIcon.defaultProps = {
    color: null,
    className: null
};

export default withStyles(styles)(StopIcon);

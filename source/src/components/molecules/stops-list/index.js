// @packages
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @scrips
import stopsList from './stops-list.json';

// @styles
import styles from './styles';

const StopsList = ({
    classes,
    id,
    stops
}) => (
    <div className={classes.container} id={id}>
        <ol className={classes.stops}>
        {stops.map((stop, index) => (
            <li key={`${id}-item-${stop.stopName}`} className={classes.stopItem}>
                <span className={classes.stopNumber}>
                    {index < stops.length - 1
                        ? index + 1
                        : <LocationOnIcon />}
                </span>
                {stop.stopName}
            </li>
        ))}
        </ol>
    </div>
);

StopsList.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    stops: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
    }))
};

StopsList.defaultProps = {
    stops: stopsList
};

export default withStyles(styles)(StopsList);

// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @scrips
import stopsList from './stops-list.json';

// @styles
import styles from './styles';

const StopList = ({
    classes,
    id,
    stops
}) => (
    <div className={classes.container} id={id}>
        <ol className={classes.stops}>
        {stops.map(stop => (
            <li key={stop.name} className={classes.stopItem}>
                <span className={classes.stopNumber}>{stop.id}</span>
                {stop.name}
            </li>
        ))}
        </ol>
    </div>
);

StopList.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    stops: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
    }))
};

StopList.defaultProps = {
    stops: stopsList
};

export default withStyles(styles)(StopList);

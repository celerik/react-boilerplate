// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';
import StopIcon from '../../atoms/stop-icon';

const StopsList = ({
    classes,
    id,
    stops
}) => (
    <div className={classes.container} id={id}>
        <ol className={classes.stops}>
        {stops.map((stop, index) => (
            <li key={`${id}-item-${stop.stopName}`} className={classes.stopItem}>
                <StopIcon
                    id={`${id}-stop-icon-${index}`}
                    isListItem
                    label={index < stops.length - 1 && index + 1}
                />
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
    stops: []
};

export default withStyles(styles)(StopsList);

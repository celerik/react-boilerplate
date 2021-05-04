// @packages
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';

// @scrips
import Stop from './stop';

// @styles
import styles from './styles';

const StopsList = ({
    classes,
    id,
    stops
}) => {
    const [currentAction, setCurrentAction] = useState(null);
    const [selectedStop, setSelectedStop] = useState(null);

    const onSelectAction = (stopId) => (action) => {
        setSelectedStop(stopId);
        setCurrentAction(action);
    };

    return (
        <div className={classes.container} id={id}>
            <ol className={classes.stops}>
                {stops.map((stop, index) => (
                    <Stop
                        content={index + 1}
                        currentAction={selectedStop === stop.stopId && currentAction}
                        key={`${id}-item-${stop.stopName}`}
                        lastItem={index === stops.length - 1}
                        onSelectAction={onSelectAction(stop.stopId)}
                        pathId={stop.pathId}
                        stopId={stop.stopId}
                        stopName={stop.stopName}
                        to={stops[index + 1]?.stopId}
                    />
                ))}
            </ol>
        </div>
    );
};

StopsList.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    stops: PropTypes.arrayOf(PropTypes.shape({
        stopId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
    }))
};

StopsList.defaultProps = {
    stops: []
};

export default withStyles(styles)(StopsList);

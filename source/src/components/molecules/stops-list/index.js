// @packages
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';

// @scrips
import Stop from './stop';

// @styles
import styles from './styles';
import { useSetActiveAction } from '../../../providers/stops/actions';

const StopsList = ({
    classes,
    id,
    stops
}) => {
    const setSelectedAction = useSetActiveAction();
    const [selectedStop, setSelectedStop] = useState(null);

    const onSelectAction = (stopId) => (action) => {
        setSelectedStop(stopId);
        setSelectedAction(action);
    };

    return (
        <div className={classes.container} id={id}>
            <ol className={classes.stops}>
                {stops.map((stop, index) => (
                    <Stop
                        content={index + 1}
                        isSelected={selectedStop === stop.stopId}
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

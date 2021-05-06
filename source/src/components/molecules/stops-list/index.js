// @packages
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';

// @scrips
import { useSetActiveAction } from '../../../providers/stops/actions';
import Project from '../../../services/project';
import Stop from './stop';

// @styles
import styles from './styles';

const StopsList = ({
    classes,
    projectId,
    onUpdate,
    servicePatternId,
    stops
}) => {
    const setSelectedAction = useSetActiveAction();
    const [selectedStop, setSelectedStop] = useState(null);

    const onSelectAction = (stopId) => (action) => {
        setSelectedStop(stopId);
        setSelectedAction(action);
    };

    const onRerouteSegment = (servicePatternStopId1, servicePatternStopId2) =>
        (pathId, pathGeometry) =>
            Project.rerouteSegment({
                pathGeometry,
                pathId,
                projectId,
                servicePatternId,
                servicePatternStopId1,
                servicePatternStopId2
            }).then(onUpdate);

    return (
        <div className={classes.container} id={`stop-list-sp-${servicePatternId}`}>
            <ol className={classes.stops}>
                {stops.map((stop, index) => (
                    <Stop
                        content={index + 1}
                        isSelected={selectedStop === stop.stopId}
                        key={`sp-${servicePatternId}-item-${stop.stopName}`}
                        lastItem={index === stops.length - 1}
                        onSelectAction={onSelectAction(stop.stopId)}
                        onRerouteSegment={onRerouteSegment(
                            stop.servicePatternStopId,
                            stops[index + 1]?.servicePatternStopId
                        )}
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
    onUpdate: PropTypes.func,
    projectId: PropTypes.string.isRequired,
    servicePatternId: PropTypes.string.isRequired,
    stops: PropTypes.arrayOf(PropTypes.shape({
        servicePatternStopId: PropTypes.string.isRequired,
        stopId: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }))
};

StopsList.defaultProps = {
    onUpdate: Function.prototype,
    stops: []
};

export default withStyles(styles)(StopsList);

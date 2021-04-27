// @packages
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PropTypes from 'prop-types';
import React from 'react';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import SwapHorizOutlinedIcon from '@material-ui/icons/SwapHorizOutlined';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { withStyles } from '@material-ui/core';

// @scrips
import Stop from './stop';
import stopsList from './stops-list.json';
import { config } from '../../../config';

// @styles
import styles from './styles';

const StopsList = ({
    classes,
    id,
    stops
}) => {
    const actions = [{
        name: config.text.editServicePattern.addStopBelow,
        icon: <AddCircleOutlinedIcon />,
        onClick: Function.prototype
    }, {
        name: config.text.editServicePattern.checkpoint,
        icon: <TimerOutlinedIcon />,
        onClick: Function.prototype
    }, {
        name: config.text.editServicePattern.replace,
        icon: <SwapHorizOutlinedIcon />,
        onClick: Function.prototype
    }, {
        name: config.text.editServicePattern.delete,
        icon: <DeleteRoundedIcon />,
        onClick: Function.prototype
    }];

    return (
        <div className={classes.container} id={id}>
            <ol className={classes.stops}>
            <span className={classes.stopLine} />
            {stops.map((stop, index) => (
                <Stop
                    key={`${id}-item-${stop.stopName}`}
                    content={index < stops.length - 1 ? index + 1 : <LocationOnIcon />}
                    stopName={stop.stopName}
                    actions={actions}
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
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
    }))
};

StopsList.defaultProps = {
    stops: stopsList
};

export default withStyles(styles)(StopsList);

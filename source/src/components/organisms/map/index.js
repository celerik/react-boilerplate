// @packages
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { Map } from 'mapbox-gl';
import { IconButton, withStyles } from '@material-ui/core';

// @scripts
import { config } from '../../../config';

// @scripts
import styles from './styles';
import Boom from '../features/index';

const CustomMap = ({
    className,
    classes,
    id
}) => {
    const mapContainer = useRef();

    useEffect(() => {
        const map = new Map({
            accessToken: config.settings.mapBox.token,
            center: [-75.5674723, 6.2092601],
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: 19
        });

        return () => map.remove();
    }, []);

    return (
        <div className={className} id={id}>
        <div className={classes.map} ref={mapContainer} />
        <div><Boom/></div>
        </div>
    );
};

CustomMap.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

CustomMap.defaultProps = {};

export default withStyles(styles)(CustomMap);

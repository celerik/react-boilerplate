// @packages
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { Map } from 'mapbox-gl';
import { withStyles } from '@material-ui/core';

// @scripts
import { config } from '../../../config';
import ZoomButtons from '../zoom-buttons/index';

// @styles
import styles from './styles';
import { theme } from '../../../styles/material-ui';

const CustomMap = ({
    className,
    classes,
    id
}) => {
    const mapContainer = useRef();
    const mapRef = useRef();

    useEffect(() => {
        const map = new Map({
            accessToken: config.settings.mapBox.token,
            center: [-75.5674723, 6.2092601],
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            zoom: 19
        });

        map.on('load', () => {
            map.setPaintProperty('building', 'fill-color', [
                'interpolate',
                ['linear'],
                ['zoom'],
                2,
                theme.palette.background.primary,
                1,
                theme.palette.background.primary
            ]);
            map.setPaintProperty('building', 'fill-opacity', theme.palette.background.primary);
            map.setPaintProperty('building', 'fill-outline-color', theme.palette.background.primary);
            map.setPaintProperty('landuse', 'fill-color', theme.palette.background.primary);
            map.setPaintProperty('building', 'fill-color', theme.palette.background.primary);
            map.setPaintProperty('land', 'background-color', theme.palette.background.primary);
        });

        mapRef.current = map;

        return () => map.remove();
    }, []);

    return (
        <div className={className} id={id}>
            <div className={classes.map} ref={mapContainer} />
            <ZoomButtons
                onZoomIn={() => {
                    mapRef.current.zoomIn();
                }}
                onZoomOut={() => {
                    mapRef.current.zoomOut();
                }}
            />
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

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

    useEffect(() => {
        const map = new Map({
            accessToken: config.settings.mapBox.token,
            center: [
                -0.04212516311508214,
                51.52249290538935
            ],
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            zoom: 15
        });

        map.on('load', () => {
            map.setPaintProperty('building', 'fill-color', [
                'interpolate',
                ['linear'],
                ['zoom'],
                2,
                theme.palette.background.default,
                1,
                theme.palette.background.default
            ]);
            map.setPaintProperty('building', 'fill-opacity', theme.palette.background.default);
            map.setPaintProperty('building', 'fill-outline-color', theme.palette.background.default);
            map.setPaintProperty('landuse', 'fill-color', theme.palette.background.default);
            map.setPaintProperty('building', 'fill-color', theme.palette.background.default);
            map.setPaintProperty('land', 'background-color', theme.palette.background.default);
        });

        return () => map.remove();
    }, []);

    return (
        <div className={className} id={id}>
            <div className={classes.map} ref={mapContainer} />
            <ZoomButtons />
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

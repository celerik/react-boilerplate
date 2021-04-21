// @packages
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { Map } from 'mapbox-gl';
import { withStyles } from '@material-ui/core';

// @scripts
import { config } from '../../../config';
import ZoomButtons from '../../atoms/zoom-buttons/index';

// @styles
import styles from './styles';
import { theme } from '../../../styles/material-ui';

const AVALIABLE_CONTROLS = ['zoom'];

const CustomMap = ({
    className,
    classes,
    controls,
    id
}) => {
    const mapContainer = useRef();
    const mapRef = useRef();

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

        mapRef.current = map;

        return () => map.remove();
    }, []);

    return (
        <div className={className} id={id}>
            <div className={classes.map} ref={mapContainer} />
            {controls.includes('zoom') && (
                <ZoomButtons
                    onZoomIn={() => mapRef.current.zoomIn()}
                    onZoomOut={() => mapRef.current.zoomOut()}
                />
            )}
        </div>
    );
};

CustomMap.propTypes = {
    classes: PropTypes.object.isRequired,
    controls: PropTypes.arrayOf(PropTypes.oneOf(AVALIABLE_CONTROLS)),
    className: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

CustomMap.defaultProps = {
    controls: AVALIABLE_CONTROLS
};

export default withStyles(styles)(CustomMap);

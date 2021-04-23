// @packages
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core';

// @scripts
import Map from './map';
import { config } from '../../../config';
import ZoomButtons from '../../atoms/zoom-buttons/index';

// @styles
import styles from './styles';
import { theme } from '../../../styles/material-ui';
import { formatSegmentsPath } from '../../../util';

// @constants
const AVALIABLE_CONTROLS = ['zoom'];

const CustomMap = ({
    className,
    classes,
    controls,
    id
}) => {
    const mapContainer = useRef();
    const mapRef = useRef();
    const { servicePatterns } = useSelector(state => ({
        servicePatterns: state.map.servicePatterns
    }));

    useEffect(() => {
        const map = new Map(mapContainer.current, theme);
        mapRef.current = map;
        return () => map.remove();
    }, []);

    useEffect(() => {
        servicePatterns.forEach((servicePattern) => {
            const geojson = {
                type: 'FeatureCollection',
                features: []
            };

            geojson.features = servicePattern.segments
                .map(segment => ({
                    type: 'Feature',
                    geometry: {
                        type: 'LineString',
                        properties: {},
                        coordinates: formatSegmentsPath(segment.path).coordinates
                    }
                }));

            mapRef.current.paintRoute(geojson, { 
                color: servicePattern.colour,
                name: `route-${servicePattern.servicePatternName}`
            });

            console.log(geojson);
            mapRef.current.setCenter(
                geojson.features[0].geometry.coordinates[0]
            )
        });
    }, [servicePatterns]);

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

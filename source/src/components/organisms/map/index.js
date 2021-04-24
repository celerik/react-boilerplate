// @packages
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core';

// @scripts
import Map from './map';
import ZoomButtons from '../../atoms/zoom-buttons/index';

// @styles
import styles from './styles';
import { theme } from '../../../styles/material-ui';
import { formatSegmentsPath } from '../../../util';
import StopIcon from '../../atoms/stop-icon';

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

    const formatSegmentPath = (path) => {
        const { coordinates } = formatSegmentsPath(path);

        return [
            {
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    properties: {},
                    coordinates
                }
            }
        ];
    };

    const formatMarkers = (path) => {
        const { coordinates } = formatSegmentsPath(path);
        const iconSize = [10, 10];

        return [
            {
                type: 'Feature',
                properties: {
                    message: 'Foo',
                    iconSize
                },
                geometry: {
                    type: 'Point',
                    coordinates: coordinates[0]
                }
            },
            {
                type: 'Feature',
                properties: {
                    message: 'Foo',
                    iconSize
                },
                geometry: {
                    type: 'Point',
                    coordinates: coordinates[coordinates.length - 1]
                }
            }
        ];
    };

    useEffect(() => {
        servicePatterns.forEach((servicePattern) => {
            const geojsonPath = {
                type: 'FeatureCollection',
                features: []
            };

            const geojsonMarker = {
                type: 'FeatureCollection',
                features: []
            };

            const data = servicePattern.segments
                .map(segment => ({
                    path: formatSegmentPath(segment.path),
                    markers: formatMarkers(segment.path)
                }));

            geojsonPath.features = data.flatMap(item => item.path);
            geojsonMarker.features = data.flatMap(item => item.markers);

            mapRef.current.paintRoute(geojsonPath, {
                color: servicePattern.colour,
                name: `route-${servicePattern.servicePatternName}`
            });

            mapRef.current.paintMarkers(geojsonMarker);

            mapRef.current.setCenter(
                geojsonPath.features[0].geometry.coordinates[0]
            );
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

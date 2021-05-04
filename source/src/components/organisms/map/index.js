// @packages
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import ReactMapBoxGl, { Cluster, GeoJSONLayer, Marker } from 'react-mapbox-gl';
import StopIcon from '../../atoms/stop-icon';
import { useSelector } from 'react-redux';
import { useTheme, withStyles } from '@material-ui/core';

// @scripts
import ZoomButtons from '../../atoms/zoom-buttons/index';

// @styles
import styles from './styles';
import { useStops, useStopsContext } from '../../../providers/stops';

// @constants
const AVAILABLE_CONTROLS = ['zoom'];
const shapes = {
    line: {
        paint: {
            'line-width': 5
        },
        layout: {
            'line-join': 'round',
            'line-cap': 'round'
        }
    }
};

const CustomCluster = (features = []) => {
    const color = features[0]?.properties.color;

    const CustomMarker = (coordinates, pointCount) => (
        <Marker coordinates={coordinates}>
            <StopIcon
                color={color}
                label={`+${pointCount}`}
            />
        </Marker>
    );

    return CustomMarker;
};

const Map = ReactMapBoxGl({
    accessToken: config.settings.mapBox.token
});

const CustomMap = ({
    className,
    classes,
    controls,
    id
}) => {
    const theme = useTheme();
    const [center, setCenter] = useState([
        -0.04212516311508214,
        51.52249290538935
    ]);

    const mapRef = useRef();

    const { historyPaths, servicePatterns, stops } = useSelector(state => state.map);
    const { activePaths } = useStopsContext();

    useEffect(() => {
        if (servicePatterns.length && servicePatterns[0].features?.length) {
            setCenter(servicePatterns[0].features[0]?.geometry.coordinates[0]);
        }
    }, [servicePatterns]);

    return (
        <div className={className} id={id}>
            <Map
                id={`${id}-map`}
                ref={mapRef}
                // eslint-disable-next-line
                style="mapbox://styles/mapbox/light-v10"
                className={classes.map}
                center={center}
            >
                {servicePatterns.map((featureCollection, index) => (
                    <GeoJSONLayer
                        data={featureCollection}
                        key={`route-${index}`}
                        lineLayout={shapes.line.layout}
                        linePaint={{
                            ...shapes.line.paint,
                            'line-color': [
                                'case',
                                ['has', 'color'],
                                ['get', 'color'],
                                theme.palette.primary.main
                            ],
                            'line-width': [
                                'case',
                                ['in', ['get', 'pathId'], ['literal', ['-3522245749409731015']]],
                                8,
                                5
                            ]
                        }}
                    />
                ))}
                {historyPaths.map((featureCollection, index) => (
                    <GeoJSONLayer
                        data={featureCollection}
                        key={`history-path-${index}`}
                        lineLayout={shapes.line.layout}
                        linePaint={{
                            ...shapes.line.paint,
                            'line-color': theme.palette.primary.main,
                            'line-dasharray': [2, 2.5],
                            'line-width': 3
                        }}
                    />
                ))}
                {stops.map((featureCollection, index) => (
                    <Cluster
                        ClusterMarkerFactory={CustomCluster(featureCollection.features)}
                        key={`${id}-cluster-${index}`}
                        maxZoom={11}
                    >
                        {featureCollection.features.map(
                            (feature, index) => (
                                <Marker
                                    key={`marker-${index}`}
                                    coordinates={feature.geometry.coordinates}
                                >
                                    <StopIcon
                                        color={feature.properties.color}
                                        label={index < featureCollection.features.length - 1 && index + 1}
                                        stopId={feature.properties.stopId}
                                    />
                                </Marker>
                            )
                        )}
                    </Cluster>
                ))}
            </Map>
            {controls.includes('zoom') && (
                <ZoomButtons
                    id={`${id}-zoom-buttons`}
                    onZoomIn={() => mapRef.current.state.map.zoomIn()}
                    onZoomOut={() => mapRef.current.state.map.zoomOut()}
                />
            )}
        </div>
    );
};

CustomMap.propTypes = {
    classes: PropTypes.object.isRequired,
    controls: PropTypes.arrayOf(PropTypes.oneOf(AVAILABLE_CONTROLS)),
    className: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

CustomMap.defaultProps = {
    controls: AVAILABLE_CONTROLS
};

export default withStyles(styles)(CustomMap);

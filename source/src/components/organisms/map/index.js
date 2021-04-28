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

const ClusterMarker = (coordinates, pointCount) => (
    <Marker coordinates={coordinates}>
        <StopIcon
            label={`+${pointCount}`}
        />
    </Marker>
);

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

    const { servicePatterns, stops } = useSelector(state => state.map);

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
                        layerOptions={{
                            maxZoom: 15,
                            minZoom: 11,

                            'max-zoom': 15,
                            'min-zoom': 11
                        }}
                        lineLayout={shapes.line.layout}
                        linePaint={{
                            ...shapes.line.paint,
                            'line-color': theme.palette.primary.main
                        }}
                    />
                ))}
                <Cluster
                    ClusterMarkerFactory={ClusterMarker}
                    maxZoom={11}
                >
                    {stops.flatMap(featureCollection => featureCollection.features.map(
                        (feature, index) => (
                            <Marker
                                key={`marker-${index}`}
                                coordinates={feature.geometry.coordinates}
                            >
                                <StopIcon
                                    label={index < featureCollection.features.length - 1 && index + 1}
                                />
                            </Marker>
                        )
                    ))}
                </Cluster>
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

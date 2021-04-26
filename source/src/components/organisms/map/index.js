// @packages
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTheme, withStyles } from '@material-ui/core';

// @scripts
import ZoomButtons from '../../atoms/zoom-buttons/index';

// @styles
import styles from './styles';
import mockedSource from './source-geo.json';
import StopIcon from '../../atoms/stop-icon';
import ReactMapBoxGl, { Feature, GeoJSONLayer, Layer, Source, Marker} from 'react-mapbox-gl';

// @constants
const AVALIABLE_CONTROLS = ['zoom'];
const shapes = {
    circle: {
        paint: {
            'circle-color': '#ff0000',
            'circle-radius': 10
        },
        layout: {
            'visibility': 'visible'
        }
    },
    line: {
        paint: {
            'line-color': 'yellow',
            'line-width': 5
        },
        layout: {
            'line-join': 'round',
            'line-cap': 'round'
        }
    }
}    

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

    const { servicePatterns } = useSelector(state => ({
        servicePatterns: state.map.servicePatterns
    }));

    useEffect(() => {
        if (servicePatterns.length && servicePatterns[0].features?.length) {
            setCenter(servicePatterns[0].features[0]?.geometry.coordinates[0]);
            // setCenter(mockedSource.route.features[0].geometry.coordinates[0]);
            // setCenter([
            //     -1.5396335718074,
            //     53.7997586213104
            // ])
            setCenter([0,0])
        }
    }, [servicePatterns]);

    return (
        <div className={className} id={id}>
            <Map 
                id={`${id}-map`}
                ref={mapRef}
                style="mapbox://styles/mapbox/light-v10"
                className={classes.map}
                center={center}
            >
                <GeoJSONLayer
                    data={mockedSource.route}
                    lineLayout={shapes.line.layout}
                    linePaint={shapes.line.paint}
                /> 
            </Map>
            {controls.includes('zoom') && (
                <ZoomButtons
                    id={`${id}-zoom-buttoms`}
                    onZoomIn={() => mapRef.current.state.map.zoomIn()}
                    onZoomOut={() => mapRef.current.state.map.zoomOut()}
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

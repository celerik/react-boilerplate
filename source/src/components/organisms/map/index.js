// @packages
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core';

// @scripts
// import Map from './map';
import ZoomButtons from '../../atoms/zoom-buttons/index';

// @styles
import styles from './styles';
import { theme } from '../../../styles/material-ui';
import { formatSegmentsPath } from '../../../util';
import StopIcon from '../../atoms/stop-icon';
import ReactMapboxGl, { Feature, Layer } from 'react-mapbox-gl';

// @constants
const AVALIABLE_CONTROLS = ['zoom'];
    
const Map = ReactMapboxGl({
    accessToken: config.settings.mapBox.token
});

const CustomMap = ({
    className,
    classes,
    controls,
    id
}) => {
    const [center, setCenter] = useState([
        -0.04212516311508214,
        51.52249290538935
    ]);

    const mapRef = useRef();

    const { servicePatterns } = useSelector(state => ({
        servicePatterns: state.map.servicePatterns
    }));

    const processedServicePatterns = React.useMemo(() => servicePatterns.map((servicePattern) => ({
        ...servicePattern,
        coordinates: servicePattern.segments
            .flatMap(segment => formatSegmentsPath(segment.path).coordinates)
    })), [servicePatterns]);

    if (servicePatterns.length) console.log(processedServicePatterns);

    console.log(servicePatterns, processedServicePatterns, mapRef);

    useEffect(() => {
        if (processedServicePatterns.length) {
            setCenter(processedServicePatterns[0].coordinates[0]);
        }
    }, [processedServicePatterns]);

    global.a = mapRef

    return (
        <div className={className} id={id}>
            <Map 
                ref={mapRef}
                style="mapbox://styles/mapbox/light-v10"
                className={classes.map}
                center={center}
            >
                {processedServicePatterns.map(servicePattern => (
                    <Layer 
                        id={`line-${servicePattern.routeName}`}
                        type="line" 
                        maxZoom={24}
                        minZoom={0}
                        paint={{
                            'line-color': '#ffff00',
                            'line-width': 10
                        }}
                        layout={{
                            'line-join': 'round',
                            'line-cap': 'round',
                            visibility: 'visible'
                        }}
                    >
                        <Feature 
                            coordinates={servicePattern.coordinates}
                        />
                    </Layer>
                ))}
                <Layer 
                    id={`line-test`}
                    type="line" 

                    paint={{
                        'line-color': '#ffff00',
                        'line-width': 12
                    }}
                    layout={{
                        'line-join': 'round',
                        'line-cap': 'round',
                        visibility: 'visible'
                    }}
                >
                </Layer>
            </Map>
            {controls.includes('zoom') && (
                <ZoomButtons
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

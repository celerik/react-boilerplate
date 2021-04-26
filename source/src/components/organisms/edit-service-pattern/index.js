// @packages
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { useTheme, withStyles } from '@material-ui/core';

// @scripts
import BackToButton from '../../molecules/back-to-button';
import Icon from '@material-ui/core/Icon';
import { config } from '../../../config';
import { useDispatch } from 'react-redux';

// @styles
import styles from './styles';
import Project from '../../../services/project';
import StopsList from '../../molecules/stops-list';
import { setMapServicePatterns, setMapStops } from '../../../actions';
import { formatUrlParam } from '../../../util';
import BaselineConnect from '../../../services/baseline-connect';

const ServicePatternMenu = ({
    classes,
    id,
    locked,
    match
}) => {
    const theme = useTheme();
    const { projectId, servicePatternId } = match.params;
    const [servicePattern, setServicePattern] = useState(null);
    const dispatch = useDispatch();

    const fetchServicePatternData = async () => {
        const servicePattern = await Project.getServicePattern(projectId, servicePatternId);
        servicePattern.colour = theme.palette.primary.light;
        const stops = await Promise.all(
            servicePattern.stops.map(stop => BaselineConnect.getStopDetails(stop.stopId))
        );

        const servicePatternGeojson = {
            type: 'FeatureCollection',
            features: servicePattern.features
        };

        const geojsonStops = {
            type: 'FeatureCollection',
            features: stops.flatMap(stop => stop.features)
        };

        setServicePattern(servicePattern);
        dispatch(setMapServicePatterns([servicePatternGeojson]));
        dispatch(setMapStops());
    };

    useEffect(fetchServicePatternData, []);

    if (!servicePattern) {
        return null;
    }

    return (
        <div id={id} className={classes.mainContainer}>
            <BackToButton
                label={config.text.createServicePattern.backToServicePatterns}
                to={formatUrlParam(config.routes.dashboard.servicePatterns.url, projectId)}
            />
            <div className={classes.header}>
                <Typography variant="h3">
                    {servicePattern.settings.servicePatternName}
                </Typography>
                <div className={classes.lockedStatus}>
                    <Icon fontSize="small">
                        {locked ? 'lock' : 'lock_open'}
                    </Icon>
                    <Typography variant="subtitle">
                        {locked ? config.text.editServicePattern.locked : config.text.editServicePattern.unlocked}
                    </Typography>
                </div>
            </div>
            <Typography className={classes.subtitle} variant="body1">
                {config.text.editServicePattern.route}
                {servicePattern.routeName}
            </Typography>
            <Typography className={classes.label} variant="h5">
                {config.text.editServicePattern.editServicePatternInfo}
            </Typography>
            <Divider
                className={classes.divider}
                variant="fullWidth"
            />
            <StopsList
                id={`${id}-stoplist`}
                stops={servicePattern.stops}
            />
        </div>
    );
};

ServicePatternMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    locked: PropTypes.bool,
    match: PropTypes.object.isRequired
};

ServicePatternMenu.defaultProps = {
    locked: false
};

export default withStyles(styles)(ServicePatternMenu);

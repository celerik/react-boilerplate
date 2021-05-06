// @packages
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core';

// @scripts
import BackToButton from '../../molecules/back-to-button';
import BaselineConnect from '../../../services/baseline-connect';
import FormatDays from '../../atoms/format-days';
import IconButton from '../../atoms/icon-button';
import Project from '../../../services/project';
import StopsList from '../../molecules/stops-list';
import WeekDaysModal from '../../molecules/modal-days-week';
import { config } from '../../../config';
import { formatUrlParam } from '../../../util';
import { globalUI } from '../../../core';
import { setMapServicePatterns, setMapStops } from '../../../actions';
import { useHideMainMenu } from '../../../providers/main-menu/actions';

// @styles
import styles from './styles';

const ServicePatternMenu = ({
    classes,
    id,
    locked,
    match
}) => {
    const { projectId, servicePatternId } = match.params;
    const [editModalVisible, openEditModal] = useState(false);
    const [servicePattern, setServicePattern] = useState(null);
    const dispatch = useDispatch();
    const hideMainMenu = useHideMainMenu();

    const fetchServicePatternData = async () => {
        const servicePattern = await Project.getServicePattern(projectId, servicePatternId);
        const stops = await Promise.all(
            servicePattern.stops.map(stop => BaselineConnect.getStopDetails(stop.stopId))
        );

        const geojsonStops = {
            type: 'FeatureCollection',
            features: stops.flatMap(stopDetails => stopDetails.features)
        };

        servicePattern.stops = servicePattern.stops.map(stop => ({
            ...stop,
            pathId: servicePattern.segments.find(segment =>
                segment.fromServicePatternStopId === stop.servicePatternStopId)?.path.pathId
        }));

        setServicePattern(servicePattern);
        dispatch(setMapServicePatterns([servicePattern.pathGeoJSON]));
        dispatch(setMapStops([geojsonStops]));
    };

    useEffect(() => {
        hideMainMenu(true);
        fetchServicePatternData();
    }, []);

    const onUpdateDays = async (days) => {
        const infoDays = {
            servicePatternName: servicePattern.settings.servicePatternName,
            daysOfOperation: days
        };
        await Project.updateServicePatternSettings(projectId, servicePatternId, infoDays);
        globalUI.showAlertNotificationSuccess(
            config.text.editServicePattern.updateServicePattern,
            config.text.editServicePattern.putDaysSuccess
        );
        await fetchServicePatternData();
        openEditModal(false);
    };

    if (!servicePattern) {
        return null;
    }

    return (
        <div id={id} className={classes.mainContainer}>
            <BackToButton
                label={config.text.createServicePattern.backToServicePatterns}
                onClick={() => hideMainMenu(false)}
                to={formatUrlParam(config.routes.dashboard.servicePatterns.url, projectId)}
            />
            <div className={classes.header}>
                <div className={classes.headerInfoLeft}>
                    <Typography variant="h3">
                        {servicePattern.settings.servicePatternName}
                    </Typography>
                    <Typography className={classes.subtitle} variant="body1">
                        {config.text.editServicePattern.route}
                        {servicePattern.routeName}
                    </Typography>
                </div>
                <div className={classes.headerInfoRight}>
                    <div className={classes.lockedStatus}>
                        <Icon fontSize="small">
                            {locked ? 'lock' : 'lock_open'}
                        </Icon>
                        <Typography variant="subtitle">
                            {locked ? config.text.editServicePattern.locked : config.text.editServicePattern.unlocked}
                        </Typography>
                    </div>
                    <div className={classes.daysSection}>
                        <IconButton
                            icon="edit"
                            iconClassName={classes.icon}
                            id={`${id}-edit-icon`}
                            label="edit"
                            onClick={() => openEditModal(true)}
                        />
                        <FormatDays
                            className={classes.weekdays}
                            days={servicePattern.settings.daysOfOperation}
                            id={`${id}-format-days`}
                        />
                    </div>
                </div>
            </div>
            <Typography className={classes.label} variant="h5">
                {config.text.editServicePattern.editServicePatternInfo}
            </Typography>
            <Divider
                className={classes.divider}
                variant="fullWidth"
            />
            <StopsList
                projectId={projectId}
                onUpdate={fetchServicePatternData}
                servicePatternId={servicePatternId}
                stops={servicePattern.stops}
            />
            <WeekDaysModal
                days={servicePattern.settings.daysOfOperation}
                id={`${id}-modal-days`}
                onClose={() => openEditModal(false)}
                onConfirm={onUpdateDays}
                open={editModalVisible}
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

// @packages
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { useTheme, withStyles } from '@material-ui/core';

// @scripts
import BackToButton from '../../molecules/back-to-button';
import IconButton from '../../atoms/icon-button';
import Project from '../../../services/project';
import StopsList from '../../molecules/stops-list';
import WeekDaysModal from '../../molecules/modal-days-week';
import { config } from '../../../config';
import { formatUrlParam } from '../../../util';
import { globalUI } from '../../../core';
import { setMapServicePatterns } from '../../../actions';

// @styles
import styles from './styles';

const ServicePatternMenu = ({
    classes,
    id,
    locked,
    match
}) => {
    const theme = useTheme();
    const { projectId, servicePatternId } = match.params;
    const [servicePattern, setServicePattern] = useState(null);
    const [modalDayVisibility, setModaDaysVisibility] = useState(false);
    const dispatch = useDispatch();

    const fetchServicePatternData = async () => {
        const servicePattern = await Project.getServicePattern(projectId, servicePatternId);
        servicePattern.colour = theme.palette.primary.light;
        setServicePattern(servicePattern);
        dispatch(setMapServicePatterns([servicePattern]));
    };

    useEffect(fetchServicePatternData, []);

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
        setModaDaysVisibility(false);
    };

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
            <div className={classes.header}>
                <Typography className={classes.subtitle} variant="body1">
                    {config.text.editServicePattern.route}
                    {servicePattern.routeName}
                </Typography>
                <IconButton
                    icon="edit"
                    iconClassname={classes.icon}
                    id={`${id}-edit-icon`}
                    label="edit"
                    onClick={() => setModaDaysVisibility(true)}
                />
            </div>
            <Typography className={classes.label} variant="h5">
                {config.text.editServicePattern.editServicePatternInfo}
            </Typography>
            <Divider
                className={classes.divider}
                variant="fullWidth"
            />
            {/* aca */}
            <StopsList
                id={`${id}-stoplist`}
                stops={servicePattern.stops}
            />
            <WeekDaysModal
                days={servicePattern.settings.daysOfOperation}
                id={`${id}-modal-days`}
                onClose={() => setModaDaysVisibility(false)}
                onConfirm={onUpdateDays}
                open={modalDayVisibility}
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

// @packages
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @scripts
import Actionbutton from '../../atoms/button';
import BackToButton from '../../molecules/back-to-button';
import BaselineConnect from '../../../services/baseline-connect';
import ListSelector from '../../atoms/list-selector';
import Project from '../../../services/project';
import ServicePatternCard from '../../molecules/service-pattern-card';
import { config } from '../../../config';
import { globalUI } from '../../../core';
import { useSelector } from 'react-redux';

// @styles
import styles from './styles';

const CreateServicePattern = ({
    classes,
    id,
    match
}) => {
    const [selectedRoute, selectRoute] = useState(null);
    const [servicePeriods, setServicePeriods] = useState([]);
    const [selectedServicePeriod, selectServicePeriod] = useState(null);
    const [selectedServicePatterns, selectServicePatterns] = useState([]);
    const [servicePatterns, setServicePatterns] = useState([]);
    const { projectId } = match.params;
    const {
        projects,
        routes,
        selectedTeam
    } = useSelector(state => ({
        projects: state.projects,
        routes: state.routes,
        selectedTeam: state.user.selectedTeam
    }));

    const project = projects.find(project => project.projectId === projectId);

    if (!project) {
        return null;
    }

    const handleRoute = async ({ value }) => {
        selectRoute(value);
        const newServicePeriods = await BaselineConnect.getRoutesDateRanges(selectedTeam, value);
        setServicePeriods(newServicePeriods);
    };

    const handleServicePeriod = async ({ value }) => {
        selectServicePeriod(value);
    };

    const onCheckServicePattern = (servicePatternId) => {
        const filterServicePatterns = selectedServicePatterns.filter(
            selectedId => selectedId !== servicePatternId
        );

        if (filterServicePatterns.length === selectedServicePatterns.length) {
            selectServicePatterns([...selectedServicePatterns, servicePatternId]);
        } else {
            selectServicePatterns(filterServicePatterns);
        }
    };

    const onLoadServicePatterns = async () => {
        const newServicePatterns = await BaselineConnect.getRouteServicePatterns(
            selectedTeam,
            selectedRoute,
            selectedServicePeriod
        ) ?? [];
        setServicePatterns(newServicePatterns);
    };

    const onImportServicePatterns = () => {
        const baselineServicePatternIds = servicePatterns
            .filter(item => selectedServicePatterns.includes(item.servicePatternId))
            .map(item => ({
                servicePatternId: item.servicePatternId,
                date: selectedServicePeriod
            }));

        Project.importServicePatterns(projectId, baselineServicePatternIds)
            .then(() => {
                globalUI.showAlertNotificationSuccess(
                    config.text.createServicePattern.importServicePatterns,
                    config.text.createServicePattern.importedSuccess
                );
                selectServicePatterns([]);
            });
    };

    const processedServicePeriods = servicePeriods.map(data => ({
        name: (
            <>
                <strong>Start: </strong>
                {data.start}
                <strong>End: </strong>
                {data.end}
            </>
        ),
        value: data.start
    }));

    return (
        <div id={id} className={classes.mainContainer}>
            <BackToButton label={config.text.createServicePattern.backToServicePatterns} />
            <Typography className={classes.title} variant="h4">
                {config.text.createServicePattern.addAServicePattern}
            </Typography>
            <ListSelector
                itemDesProp="routeName"
                itemValProp="routeId"
                items={routes}
                onChange={handleRoute}
                placeholder={config.text.createServicePattern.selectRoute}
                value={selectedRoute}
            />
            <ListSelector
                itemDesProp="name"
                itemValProp="value"
                items={processedServicePeriods}
                onChange={handleServicePeriod}
                placeholder={config.text.createServicePattern.selectServicePeriod}
                value={selectedServicePeriod}
            />
            <Actionbutton
                className={classes.buttonAdd}
                disabled={!selectedServicePeriod}
                label={config.text.createServicePattern.loadServicePattern}
                onClick={onLoadServicePatterns}
                startIcon="refresh"
            />
            {Boolean(servicePatterns.length) && (
                <>
                    <div className={classes.servicePatternsContainer}>
                        {servicePatterns.map((servicePattern, index) => (
                            <ServicePatternCard
                                backgroundColor={`${servicePattern.colour}77`}
                                id={`${id}-card-${index}`}
                                isCheckeable
                                isChecked={selectedServicePatterns.includes(servicePattern.servicePatternId)}
                                key={`${id}-card-${index}`}
                                onCheck={onCheckServicePattern}
                                operationDays={servicePattern.daysOfOperation}
                                operationDaysStringTemplate={config.text.servicePatternsMenu.runDays}
                                routeName={servicePattern.routeName}
                                servicePatternName={servicePattern.servicePatternName}
                                value={servicePattern.servicePatternId}
                            />
                        ))}
                    </div>
                    <Actionbutton
                        className={classes.buttonImport}
                        endIcon="file_upload"
                        label={config.text.createServicePattern.importServicePatterns}
                        onClick={onImportServicePatterns}
                    />
                </>
            )}

        </div>
    );
};

CreateServicePattern.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired
};

CreateServicePattern.defaultProps = {};

export default withStyles(styles)(CreateServicePattern);

// @packages
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @scripts
import Actionbutton from '../../atoms/button';
import BackToButton from '../../molecules/back-to-button';
import ListSelector from '../../atoms/list-selector';
import ServicePatternCard from '../../molecules/service-pattern-card';
import { bindActionCreators } from 'redux';
import { config } from '../../../config';
import { getServicePatters } from '../../../actions/service-patterns';
import { useDispatch, useSelector } from 'react-redux';

// @styles
import styles from './styles';

const CreateServicePattern = ({
    classes,
    id,
    match
}) => {
    const { params: { projectId } } = match;
    const [route, setRoute] = useState('');
    const [servicePeriod, setServicePeriod] = useState('');
    const { projects, servicePatterns } = useSelector(state => ({
        projects: state.projects,
        servicePatterns: state.servicePatterns
    }));
    const dispatch = useDispatch();
    const onGetServicePatterns = bindActionCreators(getServicePatters, dispatch);
    const project = projects.find(project => project.projectId === projectId);

    useEffect(() => {
        onGetServicePatterns({ projectId });
    }, [projectId]);

    if (!project) {
        return null;
    }

    const handleRoute = ({ value }) => {
        setRoute(value);
    };

    const handleServicePeriod = ({ value }) => {
        setServicePeriod(value);
    };

    return (
        <div id={id} className={classes.mainContainer}>
            <BackToButton label={config.text.createServicePattern.backToServicePatterns} />
            <Typography className={classes.title} variant="h4">
                {config.text.createServicePattern.addAServicePattern}
            </Typography>
            <ListSelector
                items={[{ text: 'Select route', value: 'Select route' }, { text: 'Select service period', value: 'Select service period' }]}
                onChange={handleRoute}
                placeholder={config.text.createServicePattern.selectRoute}
                value={route}
            />
            <ListSelector
                items={[{ text: 'Select route', value: 'Select route' }, { text: 'Select service period', value: 'Select service period' }]}
                onChange={handleServicePeriod}
                placeholder={config.text.createServicePattern.selectServicePeriod}
                value={servicePeriod}
            />
            <Actionbutton
                startIcon="refresh"
                className={classes.buttonAdd}
                onClick={Function.prototype}
                label={config.text.createServicePattern.addServicePattern}
            />
            <div className={classes.servicePatternsContainer}>
                {servicePatterns.map((servicePattern, index) => (
                    <ServicePatternCard
                        key={`${id}-card-${index}`}
                        isCheckeable
                        operationDays={servicePattern.settings.daysOfOperation}
                        operationDaysStringTemplate={config.text.servicePatternsMenu.runDays}
                        routeName={servicePattern.routeName}
                        servicePatternName={servicePattern.servicePatternName}
                    />
                ))}
            </div>
            <Actionbutton
                className={classes.buttonImport}
                endIcon="file_upload"
                label={config.text.createServicePattern.importServicePatterns}
                onClick={Function.prototype}
            />
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

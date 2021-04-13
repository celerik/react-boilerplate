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
import { config } from '../../../config';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getServicePatters } from '../../../actions/service-patterns';

// @styles
import styles from './styles';

const ProjectMenu = ({
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
            <BackToButton label={config.text.projectMenu.backToServicePatterns} />
            <Typography className={classes.title} variant="h4">
                {config.text.projectMenu.addAServicePattern}
            </Typography>

            <ListSelector
                placeholder={config.text.projectMenu.selectRoute}
                items={[{ text: 'Select route', value: 'Select route' }, { text: 'Select service period', value: 'Select service period' }]}
                value={route}
                onChange={handleRoute}
            />
            <ListSelector
                placeholder={config.text.projectMenu.selectServicePeriod}
                items={[{ text: 'Select route', value: 'Select route' }, { text: 'Select service period', value: 'Select service period' }]}
                value={servicePeriod}
                onChange={handleServicePeriod}
            />
            <Actionbutton
                startIcon="refresh"
                className={classes.buttonAdd}
                onClick={Function.prototype}
                label={config.text.projectMenu.addServicePattern}
            />
            <div className={classes.servicePatternsContainer}>
                {servicePatterns.map((servicePattern, index) => (
                    <ServicePatternCard
                        key={`${id}-card-${index}`}
                        routeName={servicePattern.routeName}
                        operationDaysStringTemplate={config.text.servicePatternsMenu.runDays}
                        servicePatternName={servicePattern.servicePatternName}
                        operationDays={servicePattern.settings.daysOfOperation}
                    />
                ))}
            </div>
            <Actionbutton
                endIcon="file_upload"
                className={classes.buttonImport}
                onClick={Function.prototype}
                label={config.text.projectMenu.importServicePatterns}
            />
        </div>
    );
};

ProjectMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};

ProjectMenu.defaultProps = {};

export default withStyles(styles)(ProjectMenu);

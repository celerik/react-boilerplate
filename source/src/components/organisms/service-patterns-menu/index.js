// @packages
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core';

// @scripts
import Actionbutton from '../../atoms/button';
import BackToButton from '../../molecules/back-to-button';
import ServicePatternCard from '../../molecules/service-pattern-card';
import { bindActionCreators } from 'redux';
import { format, formatUrlParam } from '../../../util/string';
import { getServicePatters } from '../../../actions/service-patterns';

// @styles
import styles from './styles';
import { config } from '../../../config';

const ServicePatterns = ({
    classes,
    history,
    id,
    match
}) => {
    const { params: { projectId } } = match;
    const { projects, servicePatterns } = useSelector(state => ({
        projects: state.projects,
        servicePatterns: state.servicePatterns
    }));
    const project = projects.find(project => project.projectId === projectId);
    const dispatch = useDispatch();
    const onGetServicePatterns = bindActionCreators(getServicePatters, dispatch);

    useEffect(() => {
        onGetServicePatterns({ projectId });
    }, [projectId]);

    if (!project) {
        return null;
    }

    const actions = [{
        icon: 'content_copy',
        name: config.text.servicePatternsMenu.copy,
        onClick: Function.prototype
    }, {
        icon: 'edit',
        name: config.text.servicePatternsMenu.edit,
        onClick: Function.prototype
    }, {
        icon: 'delete',
        name: config.text.servicePatternsMenu.delete,
        onClick: Function.prototype
    }];

    const toNewServicePattern = () => {
        history.push(formatUrlParam(config.routes.dashboard.newServicePatterns.url, projectId));
    };

    return (
        <div className={classes.mainContainer} id={id}>
            <BackToButton label={format(config.text.projectMenu.backToProject, project.projectName)} />
            <Typography className={classes.title} variant="h4">
                {config.text.servicePatternsMenu.title}
            </Typography>
            <div className={classes.servicePatternsContainer}>
                {servicePatterns.map((servicePattern, index) => (
                    <ServicePatternCard
                        actions={actions}
                        key={`${id}-card-${index}`}
                        routeName={servicePattern.routeName}
                        operationDaysStringTemplate={config.text.servicePatternsMenu.runDays}
                        servicePatternName={servicePattern.servicePatternName}
                        operationDays={servicePattern.settings.daysOfOperation}
                    />
                ))}
            </div>
            <Actionbutton
                startIcon="add"
                className={classes.buttonAdd}
                onClick={toNewServicePattern}
                label={config.text.projectMenu.addServicePattern}
            />
        </div>
    );
};

ServicePatterns.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired
};

ServicePatterns.defaultProps = {};

export default withStyles(styles)(ServicePatterns);

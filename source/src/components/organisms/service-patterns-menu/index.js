// @packages
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core';

// @scripts
import ActionButton from '../../atoms/button';
import AlertDialog from '../alert-dialog';
import BackToButton from '../../molecules/back-to-button';
import ServicePatternCard from '../../molecules/service-pattern-card';
import { format, formatUrlParam } from '../../../util/string';
import { getServicePatterns } from '../../../actions/service-patterns';
import { config } from '../../../config';

// @styles
import styles from './styles';
import Project from '../../../services/project';

const ServicePatterns = ({
    classes,
    history,
    id,
    match
}) => {
    const [servicePatternModalVisible, setServicePatternCloneModalVisibility] = useState(false);
    const [servicePatterns, setServicesPatterns] = useState([])
    const { projectId } = match.params;
    const { projects } = useSelector(state => ({
        projects: state.projects
    }));

    const project = projects.find(project => project.projectId === projectId);

    const handleClickOpen = () => {
        setServicePatternCloneModalVisibility(true);
    };

    const handleClose = () => {
        setServicePatternCloneModalVisibility(false);
    };

    useEffect(async () => {
        setServicesPatterns(await Project.getServicePatterns(projectId));
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
        onClick: (servicePatternId) => history.push(
            formatUrlParam(config.routes.dashboard.editServicePattern.url, projectId, servicePatternId)
        )
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
                        color={servicePattern.colour}
                        id={servicePattern.servicePatternId}
                        key={`${id}-card-${index}`}
                        operationDays={servicePattern.daysOfOperation}
                        operationDaysStringTemplate={config.text.servicePatternsMenu.runDays}
                        routeName={servicePattern.routeName}
                        servicePatternName={servicePattern.servicePatternName}
                    />
                ))}
            </div>
            <ActionButton
                className={classes.buttonAdd}
                label={config.text.createServicePattern.addServicePattern}
                onClick={toNewServicePattern}
                startIcon="add"
            />
            <ActionButton
                className={classes.buttonLock}
                label={config.text.createServicePattern.lockServicePattern}
                onClick={handleClickOpen}
                startIcon="lock_outlined"
            />
            <AlertDialog
                actions={[
                    {
                        name: config.text.createServicePattern.cancel,
                        onClick: Function.prototype
                    },
                    {
                        name: config.text.createServicePattern.lock,
                        disabled: true,
                        onClick: Function.prototype
                    }
                ]}
                id={`${id}-lock-service-pattern`}
                className={classes.buttonLock}
                content={config.text.createServicePattern.content}
                onClose={handleClose}
                title={config.text.createServicePattern.lockServicePattern}
                visible={servicePatternModalVisible}
            />
        </div>
    );
};

ServicePatterns.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired,
    title: PropTypes.object.isRequired
};

ServicePatterns.defaultProps = {};

export default withStyles(styles)(ServicePatterns);

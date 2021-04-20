// @packages
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core';

// @scripts
import Actionbutton from '../../atoms/button';
import AlertDialog from '../clone-project-dialog';
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
    const [servicePatternModalVisible, setServicePatternCloneModalVisibility] = useState(false);
    const { params: { projectId } } = match;
    const { projects, servicePatterns } = useSelector(state => ({
        projects: state.projects,
        servicePatterns: state.servicePatterns
    }));
    const project = projects.find(project => project.projectId === projectId);
    const dispatch = useDispatch();
    const onGetServicePatterns = bindActionCreators(getServicePatters, dispatch);

    const handleClickOpen = () => {
        setServicePatternCloneModalVisibility(true);
    };

    const handleClose = () => {
        setServicePatternCloneModalVisibility(false);
    };

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
                        operationDays={servicePattern.settings.daysOfOperation}
                        operationDaysStringTemplate={config.text.servicePatternsMenu.runDays}
                        routeName={servicePattern.routeName}
                        servicePatternName={servicePattern.servicePatternName}
                    />
                ))}
            </div>
            <Actionbutton
                className={classes.buttonAdd}
                label={config.text.createServicePattern.addServicePattern}
                onClick={toNewServicePattern}
                startIcon="add"
            />
            <Actionbutton
                className={classes.buttonBlock}
                label={config.text.createServicePattern.lockServicePattern}
                onClick={handleClickOpen}
                startIcon="lock_outlined"
            />
            <AlertDialog
                actions={[{ name: config.text.createServicePattern.cancel, disable: false },
                    { name: config.text.createServicePattern.lock, disable: true }]}
                content={config.text.createServicePattern.content}
                onClose={handleClose}
                title={config.text.createServicePattern.lockServicePattern}
                visible={servicePatternModalVisible}
                className={classes.buttonLock}
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

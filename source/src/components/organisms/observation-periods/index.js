// @packages
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core';

// @scripts
import AlertDialog from '../alert-dialog';
import BackToButton from '../../molecules/back-to-button';
import ButtonAction from '../../atoms/button';
import Calendar from '../calendar';
import HistoryList from '../../molecules/history-list';
import { config } from '../../../config';
import { format } from '../../../util/string';
import { theme } from '../../../styles/material-ui';

// @styles
import styles from './styles';

const ServicePatterns = ({
    classes,
    id,
    match
}) => {
    const [observationModalVisible, setObservationModalVisibility] = useState(false);
    const { params: { projectId } } = match;
    const { projects } = useSelector(state => ({
        projects: state.projects
    }));

    const handleClickOpen = () => {
        setObservationModalVisibility(true);
    };

    const handleClose = () => {
        setObservationModalVisibility(false);
    };

    const project = projects.find(project => project.projectId === projectId);

    if (!project) {
        return null;
    }

    return (
        <div className={classes.mainContainer} id={id}>
            <BackToButton label={format(config.text.projectMenu.backToProject, project.projectName)} />
            <Typography className={classes.title} variant="h4">
                {config.text.observationPeriodsPage.observatioPeriods}
            </Typography>
            <Typography className={classes.subTitle} variant="h6">
                {config.text.observationPeriodsPage.selectVersion}
            </Typography>
            <HistoryList
                className={classes.timeline}
                id={`${id}-history-list`}
                items={[
                    { from: '12/02/21 ', to: '21/02/21' },
                    { from: '12/02/21 ', to: '21/02/21' },
                    { from: '12/02/21 ', to: '21/02/21' }
                ]}
            />
            <AlertDialog
                actions={[
                    { name: config.text.observationPeriodsPage.cancel },
                    {
                        disabled: true,
                        name: config.text.observationPeriodsPage.observationPeriods
                    }
                ]}
                colorChange={theme.palette.primary.warn}
                content={(
                    <>
                        <div className={classes.titleContainer}>{config.text.observationPeriodsPage.content}</div>
                        <Calendar />
                    </>
                )}
                isExitButtonVisible={false}
                onClose={handleClose}
                title={(
                    <div className={classes.titleHeader}>
                        {config.text.observationPeriodsPage.addObservationPeriods}
                    </div>
                )}
                visible={observationModalVisible}
            />
            <ButtonAction
                className={classes.buttonAdd}
                id={`${id}-add-observer-period`}
                label={config.text.observationPeriodsPage.addObservationPeriod}
                onClick={handleClickOpen}
                startIcon="add"
            />
        </div>
    );
};

ServicePatterns.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired
};

ServicePatterns.defaultProps = {};

export default withStyles(styles)(ServicePatterns);

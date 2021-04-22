// @packages
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @scripts
import Actionbutton from '../../atoms/button';
import AlertDialog from '../alert-dialog';
import BackToButton from '../../molecules/back-to-button';
import ProjectSettingsModal from '../project-settings';
import { config } from '../../../config';
import { formatUrlParam } from '../../../util/string';
import { useSelector } from 'react-redux';
import { theme } from '../../../styles/material-ui';

// @styles
import styles from './styles';

const ProjectMenu = ({
    classes,
    history,
    match,
    id
}) => {
    const [runModalVisible, setRunModalVisibility] = useState(false);
    const [modalSettingsVisibility, setModalSettingsVisibility] = useState(false);
    const { params: { projectId } } = match;

    const projects = useSelector(state => state.projects);
    const project = projects.find(project => project.projectId === projectId);

    if (!project) {
        return null;
    }

    const handleClickOpen = () => {
        setRunModalVisibility(true);
    };

    const handleClose = () => {
        setRunModalVisibility(false);
    };

    const onClickMenuItem = optionName => () => {
        const optionUrl = config.routes.dashboard[optionName];
        history.push(formatUrlParam(optionUrl.url, projectId));
    };

    return (
        <div classNames={classes.mainContainer} id={id}>
            <BackToButton label={config.text.projectMenu.backToProjects} id={`${id}-back-button`} />
            <div className={classes.titleContainer}>
                <Typography className={classes.projectName} variant="h4">
                    {project.projectName}
                </Typography>
                <Tooltip
                    title="settings"
                    key={`${id}-settings-tooltip`}
                    enterDelay={500}
                    enterNextDelay={500}
                >
                    <IconButton
                        onClick={() => setModalSettingsVisibility(true)}
                    >
                        <Icon
                            className={classes.settingsIcon}
                            style={{ color: !modalSettingsVisibility ? theme.palette.text.hint : theme.palette.primary.light }}
                        >
                            settings
                        </Icon>
                    </IconButton>
                </Tooltip>
            </div>
            <div className={classes.containerCards}>
                {config.masterData.projectMenu.map((menuOption, index) => (
                    <div
                        className={classes.option}
                        onClick={onClickMenuItem(menuOption.name)}
                        tabIndex={index}
                        role="button"
                        id={`${id}-option-${menuOption.name}`}
                        onKeyDown={Function.prototype}
                        key={`${id}-option-${menuOption.name}`}
                    >
                        <Icon>{menuOption.icon}</Icon>
                        <Typography className={classes.optionText} variant="body1">
                            {config.text.projectMenu[menuOption.name]}
                        </Typography>

                    </div>
                ))}
            </div>
            <Actionbutton
                className={classes.buttonAdd}
                id={`${id}-run-project`}
                label={config.text.projectMenu.title}
                onClick={handleClickOpen}
            />
            <AlertDialog
                actions={
                    [
                        {
                            name: config.text.projectMenu.createTimeboards,
                            onClick: Function.prototype
                        },
                        {
                            name: config.text.projectMenu.createSchedule,
                            onClick: Function.prototype
                        }
                    ]
                }
                content={config.text.projectMenu.contents}
                id={`${id}-run-project-modal`}
                onClose={handleClose}
                title={config.text.projectMenu.title}
                visible={runModalVisible}
            />
            <ProjectSettingsModal
                id={`${id}-settings-modal`}
                onClose={() => setModalSettingsVisibility(false)}
                open={modalSettingsVisibility}
                projectId={projectId}
            />
        </div>
    );
};

ProjectMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired
};

ProjectMenu.defaultProps = {};

export default withStyles(styles)(ProjectMenu);

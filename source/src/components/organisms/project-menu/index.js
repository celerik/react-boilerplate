// @packages
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @scripts
import Actionbutton from '../../atoms/button';
import AlertDialog from '../alert-dialog';
import BackToButton from '../../molecules/back-to-button';
import IconButton from '../../atoms/icon-button';
import Item from '../../atoms/item';
import ProjectSettingsModal from '../project-settings';
import { config } from '../../../config';
import { formatUrlParam } from '../../../util/string';
import { theme } from '../../../styles/material-ui';
import { useSelector } from 'react-redux';

// @styles
import styles from './styles';

const ProjectMenu = ({
    classes,
    history,
    id,
    match
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

    const actions = [{
        icon: 'lock_open_outlined',
        onClick: Function.prototype
    }];

    return (
        <div classNames={classes.mainContainer} id={id}>
            <BackToButton label={config.text.projectMenu.backToProjects} id={`${id}-back-button`} />
            <div className={classes.titleContainer}>
                <Typography className={classes.projectName} variant="h4">
                    {project.projectName}
                </Typography>
                <IconButton
                    label="settings"
                    onClick={() => setModalSettingsVisibility(true)}
                    iconClassName={classes.settingsIcon}
                    icon="settings"
                    color={!modalSettingsVisibility ? theme.palette.text.hint : theme.palette.primary.light}
                />
            </div>
            <div className={classes.containerCards}>
                {config.masterData.projectMenu.map((menuOption, index) => (
                    <div
                        className={classes.option}
                        id={`${id}-option-${menuOption.name}`}
                        key={`${id}-option-${menuOption.name}`}
                        onClick={onClickMenuItem(menuOption.name)}
                        onKeyDown={Function.prototype}
                        role="button"
                        tabIndex={index}
                    >
                    <Icon>{menuOption.icon}</Icon>
                    <Item
                        className={classes.centerIcon}
                        iconButtons={index === 0 ? actions : []}
                        text={config.text.projectMenu[menuOption.name]}
                        textClass={classes.optionText}
                    />
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

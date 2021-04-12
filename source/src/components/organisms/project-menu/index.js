// @packages
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @scripts
import BackToButton from '../../molecules/back-to-button';
import { config } from '../../../config';
import { formatUrlParam } from '../../../util/string';
import { useSelector } from 'react-redux';

// @styles
import styles from './styles';

const ProjectMenu = ({
    classes,
    history,
    match,
    id
}) => {
    const { params: { projectId } } = match;

    const projects = useSelector(state => state.projects);
    const project = projects.find(project => project.projectId === projectId);

    if (!project) {
        return null;
    }

    const onClickMenuItem = optionName => () => {
        const optionUrl = config.routes.dashboard[optionName];
        history.push(formatUrlParam(optionUrl.url, projectId));
    };

    return (
        <div id={id}>
            <BackToButton label={config.text.projectMenu.backToProjects} />
            <div className={classes.titleContainer}>
                <Typography className={classes.projectName} variant="h4">
                    {project.projectName}
                </Typography>
                <Icon className={classes.settingsIcon}>settings</Icon>
            </div>
            {config.masterData.projectMenu.map((menuOption) => (
                <div
                    className={classes.option}
                    onClick={onClickMenuItem(menuOption.name)}
                    tabIndex={index}
                    role="button"
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
    );
};

ProjectMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};

ProjectMenu.defaultProps = {};

export default withStyles(styles)(ProjectMenu);

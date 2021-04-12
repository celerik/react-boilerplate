// @packages
import FilterListSharpIcon from '@material-ui/icons/FilterListSharp';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @scripts
import ActionButtom from '../../atoms/button';
import InputField from '../../molecules/input-field';
import ListActions from '../../molecules/list-options';
import { config } from '../../../config';

// @styles
import styles from './styles';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { formatUrlParam } from '../../../util/string';

const ProjectBar = ({
    classes
}) => {
    const history = useHistory();
    const projects = useSelector(state => state.projects);

    const onClickEditProject = (projectId) => {
        history.push(formatUrlParam(config.routes.dashboard.project.url, projectId));
    };

    const actions = [{
        name: config.text.projectMenu.clone,
        icon: 'content_copy',
        onClick: Function.prototype
    }, {
        name: config.text.projectMenu.edit,
        icon: 'east',
        onClick: onClickEditProject
    }];

    return (
        <>
            <InputField
                className={classes.searchBar}
                placeholder={config.text.projectMenu.searchProjectByname}
                size="small"
                variant="outlined"
                icon="search"
            />
            <div className={classes.titleHeader}>
                <Typography className={classes.title} variant="h4">
                    {config.text.projectMenu.existingProjects}
                </Typography>
                <IconButton onClick={Function.prototype}>
                    <FilterListSharpIcon />
                </IconButton>
            </div>
            <ListActions
                actions={actions}
                id="list-project-actions"
                items={projects}
            />
            <ActionButtom
                className={classes.buttonAdd}
                onClick={Function.prototype}
                label={config.text.projectMenu.newProject}
            />
        </>
    );
};

ProjectBar.propTypes = {
    classes: PropTypes.object.isRequired
};

ProjectBar.defaultProps = {};

export default withStyles(styles)(ProjectBar);

// @packages
import FilterListSharpIcon from '@material-ui/icons/FilterListSharp';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core';

// @scripts
import Actionbutton from '../../atoms/button';
import AlertDialog from '../alert-dialog';
import InputField from '../../molecules/input-field';
import ListActions from '../../molecules/list-options';
import { config } from '../../../config';
import { cloneProject } from '../../../actions/projects';
import { formatUrlParam } from '../../../util/string';

// @styles
import styles from './styles';

const ProjectBar = ({
    classes
}) => {
    const [cloneProjectId, setCloneProjectId] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [sortAsc, setSortAsc] = useState(true);
    const history = useHistory();
    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects);
    const onCloneProject = bindActionCreators(cloneProject, dispatch);

    const onClickEditProject = (projectId) => {
        history.push(formatUrlParam(config.routes.dashboard.project.url, projectId));
    };

    const handleClickOpen = (projectId) => {
        setCloneProjectId(projectId);
    };

    const handleSortOpen = () => {
        setSortAsc(!sortAsc);
    };

    const actions = [{
        name: config.text.projectMenu.clone,
        icon: 'content_copy',
        onClick: handleClickOpen
    }, {
        name: config.text.projectMenu.edit,
        icon: 'east',
        onClick: onClickEditProject
    }];

    const onClickCloneProjet = () => {
        const cloneProject = projects.find(({ projectId }) => projectId === cloneProjectId);
        onCloneProject(cloneProject);
        setCloneProjectId(null);
    };

    const sortOrder = sortAsc ? 1 : -1;

    const processedProjects = projects.sort(
        (a, b) => (a.projectName > b.projectName
            ? sortOrder
            : -sortOrder)
    ).filter(project => project
        .projectName
        .toLowerCase()
        .includes(searchValue.toLowerCase()));

    return (
        <div className={classes.mainContainer}>
            <InputField
                className={classes.searchBar}
                icon="search"
                onChange={setSearchValue}
                placeholder={config.text.projectMenu.searchProjectByname}
                size="small"
                value={searchValue}
                variant="outlined"
            />
            <div className={classes.titleHeader}>
                <Typography className={classes.title} variant="h4">
                    {config.text.projectMenu.existingProjects}
                </Typography>
                <IconButton onClick={Function.prototype}>
                    <FilterListSharpIcon onClick={handleSortOpen} />
                </IconButton>
            </div>
            <ListActions
                actions={actions}
                id="list-project-actions"
                items={processedProjects}
            />
            <Actionbutton
                className={classes.buttonAdd}
                onClick={Function.prototype}
                label={config.text.projectMenu.newProject}
            />
            <AlertDialog
                actions={[
                    {
                        name: config.text.projectMenu.cloneSnapshot,
                        onClick: Function.prototype
                    },
                    {
                        name: config.text.projectMenu.cloneServicePattern,
                        onClick: onClickCloneProjet
                    }
                ]}
                content={config.text.projectMenu.content}
                id="modal-clone-project"
                onClose={() => setCloneProjectId(null)}
                title={config.text.projectMenu.cloneProject}
                visible={Boolean(cloneProjectId)}
            />
        </div>
    );
};

ProjectBar.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.object.isRequired
};

ProjectBar.defaultProps = {};

export default withStyles(styles)(ProjectBar);

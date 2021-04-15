// @packages
import FilterListSharpIcon from '@material-ui/icons/FilterListSharp';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @scripts
import ActionButtom from '../../atoms/button';
import AlertDialog from '../clone-project-dialog';
import { config } from '../../../config';
import InputField from '../../molecules/input-field';
import ListActions from '../../molecules/list-options';

// @styles
import { formatUrlParam } from '../../../util/string';
import styles from './styles';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const ProjectBar = ({
    classes
}) => {
    const [cloneModalVisible, setCloneModalVisibility] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [sortAsc, setSortAsc] = useState(false);
    const history = useHistory();
    const projects = useSelector(state => state.projects);

    const onClickEditProject = (projectId) => {
        history.push(formatUrlParam(config.routes.dashboard.project.url, projectId));
    };

    const handleClickOpen = () => {
        setCloneModalVisibility(true);
    };

    const handleClose = () => {
        setCloneModalVisibility(false);
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

    const sortOrder = sortAsc ? 1 : -1;

    const processedProjects = projects.sort(
        (a, b) => (a.projectName > b.projectName
            ? sortOrder
            : -sortOrder)
    ).filter(project => project.projectName.includes(searchValue));

    return (
        <>
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
            <ActionButtom
                className={classes.buttonAdd}
                onClick={Function.prototype}
                label={config.text.projectMenu.newProject}
            />
            <AlertDialog
                onClose={handleClose}
                visible={cloneModalVisible}
            />
        </>
    );
};

ProjectBar.propTypes = {
    classes: PropTypes.object.isRequired
};

ProjectBar.defaultProps = {};

export default withStyles(styles)(ProjectBar);

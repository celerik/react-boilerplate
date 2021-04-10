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

const ProjectBar = ({
    classes
}) => {
    const projects = useSelector(state => state.projects);

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
                <Typography className={classes.title}>
                    {config.text.projectMenu.existingProjects}
                </Typography>
                <IconButton onClick={Function.prototype}>
                    <FilterListSharpIcon />
                </IconButton>
            </div>
            <ListActions items={projects} />
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

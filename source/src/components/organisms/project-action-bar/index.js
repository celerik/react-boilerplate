// @packages
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import FilterListSharpIcon from '@material-ui/icons/FilterListSharp';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @scripts
import ActionButtom from '../../atoms/button';
import InputField from '../../atoms/inputfield';
import ListActions from '../../molecules/list-options';
import { config } from '../../../config';

// @styles
import styles from './styles';

const ProjectBar = ({
    backgroundColor,
    classes,
    id,
    onCollapse,
    visible
}) => {
    if (!visible) {
        return null;
    }

    return (
    <ClickAwayListener onClickAway={onCollapse} id={`${id}-project-menu`}>
        <Paper
            className={classes.mainContainer}
            id={id}
            style={{
                backgroundColor
            }}
        >
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
            <ListActions items={[{ text: 'Project name 1' }, { text: 'Project name 2' }]} />
            <ActionButtom
                className={classes.buttonAdd}
                onClick={Function.prototype}
                label={config.text.projectMenu.newProject}
            />
        </Paper>
    </ClickAwayListener>
    );
};

ProjectBar.propTypes = {
    backgroundColor: PropTypes.string,
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    onCollapse: PropTypes.func,
    visible: PropTypes.bool.isRequired
};

ProjectBar.defaultProps = {
    backgroundColor: null,
    onCollapse: Function.prototype
};

export default withStyles(styles)(ProjectBar);

// @packages
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import InputField from '../../atoms/inputfield';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FilterListSharpIcon from '@material-ui/icons/FilterListSharp';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @scripts
import { dimensions } from '../../../styles/global';
import ActionButtom from '../../atoms/button';

// @styles
import styles from './styles';

const ProjectBar = ({
    backgroundColor,
    bottomActions,
    classes,
    id,
    onClickAway,
    visible,
    onClickInside,
    topActions
}) => {
    if (!visible) {
        return null;
    }

    return (
    <ClickAwayListener onClickAway={onClickAway}>
        <Paper
            className={classes.mainContainer}
            id={id}
            onClick={onClickInside}
            style={{
                backgroundColor
            }}
        >
            <ActionButtom
                className={classes.buttonAdd}
                onClick={Function.prototype}
                label="NEW PROJECT"
            />
            <InputField
                className={classes.searchBar}
                placeholder="Search project by name..."
                size="small"
                variant="outlined"
                icon="search"
            />
            <div className={classes.title}>
                <Typography>
                    Existing projects
                </Typography>
                <IconButton onClick={Function.prototype}>
                    <FilterListSharpIcon />
                </IconButton>
            </div>
            <InputField
                variant="filled"
                placeholder="Project Name 1"
                iconButtons={[{ icon: 'search' }, { icon: 'logout' }]}
            />

        </Paper>
    </ClickAwayListener>
    );
};

ProjectBar.propTypes = {
    backgroundColor: PropTypes.string,
    bottomActions: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.node,
        label: PropTypes.string,
        onClick: PropTypes.func
    })),
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    onClickAway: PropTypes.func,
    onClickInside: PropTypes.func,
    topActions: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.node,
        label: PropTypes.string,
        onClick: PropTypes.func
    })),
    width: PropTypes.number
};

ProjectBar.defaultProps = {
    backgroundColor: null,
    bottomActions: [],
    onClickAway: Function.prototype,
    onClickInside: Function.prototype,
    topActions: [],
    width: dimensions.MAIN_MENU_COLLAPSED_WIDTH
};

export default withStyles(styles)(ProjectBar);

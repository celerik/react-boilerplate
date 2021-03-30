// @packages
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @scripts
import styles from './styles';
import { dimensions } from '../../../styles/global';

const ActionBar = ({
    classes,
    backgroundColor,
    bottomActions,
    onClickAway,
    onClickInside,
    topActions,
    id,
    width
}) => (
    <ClickAwayListener onClickAway={onClickAway}>
        <Paper
            className={classes.mainContainer}
            onClick={onClickInside}
            id={id}
            style={{
                backgroundColor,
                width
            }}
        >
            <div className={classes.topActions}>
                {topActions.map(actionComponent => (
                    React.cloneElement(actionComponent)
                ))}
            </div>
            <div>
                {bottomActions.map(actionComponent => (
                    React.cloneElement(actionComponent)
                ))}
            </div>
        </Paper>
    </ClickAwayListener>
);

ActionBar.propTypes = {
    classes: PropTypes.object.isRequired,
    backgroundColor: PropTypes.string,
    bottomActions: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.node,
        label: PropTypes.string,
        onClick: PropTypes.func
    })),
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

ActionBar.defaultProps = {
    backgroundColor: null,
    bottomActions: [],
    onClickAway: Function.prototype,
    onClickInside: Function.prototype,
    topActions: [],
    width: dimensions.MAIN_MENU_COLLAPSED_WIDTH
};

export default withStyles(styles)(ActionBar);

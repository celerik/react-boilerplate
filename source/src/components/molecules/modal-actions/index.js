// @packages
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import PropTypes from 'prop-types';
import React from 'react';
import SwapHorizOutlinedIcon from '@material-ui/icons/SwapHorizOutlined';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles, useTheme } from '@material-ui/core';

// @scripts
import ActionsStop from '../actions-stop';

// @styles
import styles from './styles';

const ModalActions = ({
    classes,
    description,
    id,
    name
}) => {
    const theme = useTheme();

    const actions = [{
        name: config.text.editServicePattern.addStopBelow,
        icon: <AddCircleOutlinedIcon />,
        onClick: Function.prototype
    }, {
        name: config.text.editServicePattern.checkpoint,
        icon: <TimerOutlinedIcon />,
        onClick: Function.prototype
    }, {
        name: config.text.editServicePattern.replace,
        icon: <SwapHorizOutlinedIcon />,
        onClick: Function.prototype
    }, {
        name: config.text.editServicePattern.delete,
        icon: <DeleteRoundedIcon />,
        onClick: Function.prototype
    }];

    return (
        <div id={id} className={classes.container}>
            <Typography className={classes.title}>
                {name}
            </Typography>
            <Typography variant="h5" className={classes.text}>
                {description}
            </Typography>
            <ActionsStop
                actions={actions}
                defaultColor={theme.palette.text.primary}
                id={`${id}-actions`}
            />
        </div>
    );
};

ModalActions.propTypes = {
    classes: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

ModalActions.defaultProps = {};

export default withStyles(styles)(ModalActions);

// @packages
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles, useTheme } from '@material-ui/core';

// @scripts
import ActionsStop from '../actions-stop';

// @styles
import styles from './styles';

const ModalActions = ({
    classes,
    description,
    stopId,
    name
}) => {
    const theme = useTheme();

    return (
        <div id={`${stopId}-modal-actions`} className={classes.container}>
            <Typography className={classes.title}>
                {name}
            </Typography>
            <Typography variant="h5" className={classes.text}>
                {description}
            </Typography>
            <ActionsStop
                defaultColor={theme.palette.text.primary}
                id={`${stopId}-actions`}
                stopId={stopId}
            />
        </div>
    );
};

ModalActions.propTypes = {
    classes: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    stopId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

ModalActions.defaultProps = {};

export default withStyles(styles)(ModalActions);

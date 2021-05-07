// @packakes
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const LockedIcon = ({
    classes,
    id,
    isLocked
}) => (
    <div
        id={`${id}-lock-icon`}
    >
        { isLocked ? <LockOutlinedIcon className={classes.icon} /> : <LockOpenOutlinedIcon className={classes.icon} />}
    </div>
);

LockedIcon.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    isLocked: PropTypes.bool.isRequired
};

export default withStyles(styles)(LockedIcon);

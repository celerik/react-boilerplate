// @packages
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles, useTheme } from '@material-ui/core';

// @styles
import styles from './styles';

const colorState = (theme, status) => {
    if (status === 'error') return theme.palette.primary.error;
    if (status === 'success') return theme.palette.primary.success;
    if (status === 'warning') return theme.palette.primary.warn;
    return null;
};

const IconStatus = ({ status }) => {
    const theme = useTheme();
    return (
        <Icon style={{ color: colorState(theme, status) }}>
            {status === 'success' ? 'check_circle' : 'warning'}
        </Icon>
    );
};

IconStatus.propTypes = {
    status: PropTypes.string.isRequired
};

export default withStyles(styles)(IconStatus);

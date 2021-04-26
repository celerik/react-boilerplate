// @packages
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core';

// @scripts
import { theme } from '../../../styles/material-ui';

// @styles
import styles from './styles';

const colorState = status => {
    if (status === 'error') return theme.palette.primary.error;
    if (status === 'success') return theme.palette.primary.success;
    if (status === 'warning') return theme.palette.primary.warn;
    return null;
};

const IconStatus = ({ status }) => (
    <Icon style={{ color: colorState(status) }}>
        {status === 'success' ? 'check_circle' : 'warning'}
    </Icon>
);

IconStatus.propTypes = {
    status: PropTypes.string.isRequired
};

export default withStyles(styles)(IconStatus);

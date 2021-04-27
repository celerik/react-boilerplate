// packages
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const PointStop = ({ classes }) => (
    <span className={classes.main}> </span>
);

PointStop.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PointStop);

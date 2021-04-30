// packages
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const PointStop = ({ classes, id }) => (
    <span id={id} className={classes.main} />
);

PointStop.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};

export default withStyles(styles)(PointStop);

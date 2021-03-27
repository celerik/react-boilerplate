// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @scripts
import styles from './styles';

const Component = ({
    id
}) => (
    <div>
        {id}
    </div>
);

Component.propTypes = {
    id: PropTypes.string.isRequired
};

Component.defaultProps = {};

export default withStyles(styles)(Component);
// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

// @scripts
import ReactLogo from './logo.svg';

const Logo = ({ classes, id }) => (
    <div className={classes.logo} id={id}>
        <img alt="ReactLogo" src={ReactLogo} width={50} />
    </div>
);

Logo.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};

Logo.defaultProps = {};

export default withStyles(styles)(Logo);

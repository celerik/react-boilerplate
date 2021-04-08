// @packages
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

// @scripts
import styles from './styles';

const ZoomButtons = ({ classes }) => (
        <div className={classes.main}>
            <Button className={classes.zoom}>
                <Icon>
                    add
                </Icon>
            </Button>
            <Button className={classes.zoom}>
                <Icon>
                    remove
                </Icon>
            </Button>
        </div>
);

ZoomButtons.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired
};

ZoomButtons.defaultProps = {};

export default withStyles(styles)(ZoomButtons);

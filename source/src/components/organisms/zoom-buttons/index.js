// @packages
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @scripts
import styles from './styles';

const ZoomButtons = ({
    classes, id, onZoomIn, onZoomOut
}) => (
    <div className={classes.main} id={id}>
        <Button className={classes.button} onClick={onZoomIn}>
            <Icon>
                add
            </Icon>
        </Button>
        <Button className={classes.button} onClick={onZoomOut}>
            <Icon>
                remove
            </Icon>
        </Button>
    </div>
);

ZoomButtons.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onZoomIn: PropTypes.func.isRequired,
    onZoomOut: PropTypes.func.isRequired
};

ZoomButtons.defaultProps = {};

export default withStyles(styles)(ZoomButtons);

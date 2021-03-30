// @packages
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @scripts
import styles from './styles';

const ActionItem = ({
    classes,
    color,
    description,
    expanded,
    icon,
    id
}) => (
    <Button id={id} className={classes.itemContainer}>
        <div className={expanded ? classes.icon : classes.iconOnly} style={{ color }}>
            <Icon>
                {typeof icon === 'string'
                    ? <Icon>{icon}</Icon>
                    : icon
                }
            </Icon>
        </div>
        {expanded && (
            <Typography
                className={classes.itemDescription}
                style={{ color }}
                variant="body1"
            >
                {description}
            </Typography>
        )}
    </Button>
);

ActionItem.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.string,
    description: PropTypes.string.isRequired,
    expanded: PropTypes.bool,
    icon: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired
};

ActionItem.defaultProps = {
    color: null,
    expanded: true
};

export default withStyles(styles)(ActionItem);
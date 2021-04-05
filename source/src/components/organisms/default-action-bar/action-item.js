// @packages
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const ActionItem = ({
    bottomItem,
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
                    : icon}
            </Icon>
        </div>
        {expanded && (
            <Typography
                className={!bottomItem ? classes.itemDescription : null}
                style={{ color }}
                variant="body1"
            >
                {description}
            </Typography>
        )}
    </Button>
);

ActionItem.propTypes = {
    bottomItem: PropTypes.bool,
    classes: PropTypes.object.isRequired,
    color: PropTypes.string,
    description: PropTypes.string.isRequired,
    expanded: PropTypes.bool,
    icon: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired
};

ActionItem.defaultProps = {
    bottomItem: false,
    color: null,
    expanded: true
};

export default withStyles(styles)(ActionItem);

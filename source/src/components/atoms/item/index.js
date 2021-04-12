// @packages
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const Item = ({
    className,
    classes,
    iconButtons,
    id,
    text
}) => {
    const itemContainer = classNames(classes.itemContainer, className);

    return (
        <div className={itemContainer} id={`${id}-item-element`}>
            <Typography>
                {text}
            </Typography>
            <div>
            <IconButton onClick={Function.prototype} key={index} className={classes.iconButton}>
                    <Icon>
                        {iconButton.icon}
                    </Icon>
            </IconButton>
            </div>
        </div>
    );
};

Item.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    iconButtons: PropTypes.array,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

Item.defaultProps = {
    className: '',
    iconButtons: Array.prototype
};

export default withStyles(styles)(Item);

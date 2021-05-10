// @packages
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import IconButton from '../icon-button';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const Item = ({
    showActions,
    className,
    classes,
    iconButtons,
    id,
    onBlur,
    onHover,
    text,
    value,
    variant
}) => {
    const itemContainer = classNames(className, classes.itemContainer);
    const [actionsVisible, setActionsVisibility] = useState(showActions);

    const onBlurItem = () => {
        if (showActions) {
            return;
        }
        
        setActionsVisibility(false);
        onBlur(value);
    };

    const onHoverItem = () => {
        if (showActions) {
            return;
        }
        
        setActionsVisibility(true);
        onHover(value);
    };

    return (
        <div
            className={itemContainer}
            id={id}
            onFocus={onHoverItem}
            onMouseLeave={onBlurItem}
            onMouseOver={onHoverItem}
        >
            <Typography variant={variant}>
                {text}
            </Typography>
            <div>
            {actionsVisible && iconButtons.map((iconButton) => (
                <IconButton
                    buttonClassName={classes.iconButton}
                    icon={iconButton.icon}
                    key={`${id}-${iconButton.name}-tooltip`}
                    label={iconButton.name}
                    onClick={(event) => iconButton.onClick(value, event)}
                />
            ))}
            </div>
        </div>
    );
};

Item.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    iconButtons: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    })),
    id: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onHover: PropTypes.func,
    showActions: PropTypes.bool,
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    variant: PropTypes.string
};

Item.defaultProps = {
    className: '',
    iconButtons: [],
    onBlur: Function.prototype,
    onHover: Function.prototype,
    showActions: false,
    variant: 'body1'
};

export default withStyles(styles)(Item);

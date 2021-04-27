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
    className,
    classes,
    iconButtons,
    id,
    text,
    textClass,
    variant
}) => {
    const itemContainer = classNames(classes.itemContainer, className);
    const [actionsVisible, setActionsVisibility] = useState(false);

    const onHoverCard = () => {
        setActionsVisibility(true);
    };

    return (
        <div
            className={itemContainer}
            id={`${id}-item-element`}
            onFocus={onHoverCard}
            onMouseLeave={() => setActionsVisibility(false)}
            onMouseOver={onHoverCard}
        >
            <Typography variant={variant} className={textClass}>
                {text}
            </Typography>
            <div>
            {actionsVisible && iconButtons.map((iconButton) => (
                <IconButton
                    buttonClassname={classes.iconButton}
                    icon={iconButton.icon}
                    key={`${id}-${iconButton.name}-tooltip`}
                    label={iconButton.name}
                    onClick={(event) => iconButton.onClick(id, event)}
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
    text: PropTypes.string.isRequired,
    textClass: PropTypes.object,
    variant: PropTypes.string
};

Item.defaultProps = {
    className: '',
    iconButtons: Array.prototype,
    textClass: [],
    variant: 'body1'
};

export default withStyles(styles)(Item);

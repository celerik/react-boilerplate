// @packages
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const IconComponent = ({
    buttonClassname,
    iconClassName,
    classes,
    id,
    label,
    color,
    onClick,
    icon
}) => {
    const buttonClass = classNames(
        classes.iconButton,
        buttonClassname
    );

    const iconClass = classNames(
        classes.icon,
        iconClassName
    );

    return (
        <Tooltip
            id={id}
            title={label}
            enterDelay={500}
            enterNextDelay={500}
        >
            <IconButton
                id={`${id}-action`}
                className={buttonClass}
                onClick={onClick}
            >
                <Icon
                    className={iconClass}
                    style={color && { color }}
                >
                    {icon}
                </Icon>
            </IconButton>
        </Tooltip>
    );
};

IconComponent.propTypes = {
    buttonClassname: PropTypes.string,
    classes: PropTypes.object.isRequired,
    iconClassName: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.string.isRequired
};

IconComponent.defaultProps = {
    buttonClassname: null,
    iconClassName: null,
    label: '',
    color: null,
    onClick: Function.prototype
};

export default withStyles(styles)(IconComponent);

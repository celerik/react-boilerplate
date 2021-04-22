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
    iconClassname,
    classes,
    id,
    label,
    onClick,
    icon
}) => {
    const buttonClass = classNames(
        classes.iconButton,
        buttonClassname
    );

    const iconClass = classNames(
        classes.icon,
        iconClassname
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
                <Icon className={iconClass}>
                    {icon}
                </Icon>
            </IconButton>
        </Tooltip>
    );
};

IconComponent.propTypes = {
    buttonClassname: PropTypes.string,
    classes: PropTypes.object.isRequired,
    iconClassname: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.string.isRequired
};

IconComponent.defaultProps = {
    buttonClassname: null,
    iconClassname: null,
    label: '',
    onClick: Function.prototype
};

export default withStyles(styles)(IconComponent);

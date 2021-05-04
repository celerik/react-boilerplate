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
    arrow,
    buttonClassName,
    className,
    classes,
    color,
    icon,
    iconClassName,
    id,
    label,
    onClick,
    placement,
    size
}) => {
    const buttonClass = classNames(
        className,
        classes.iconButton,
        buttonClassName
    );

    const iconClass = classNames(
        classes.icon,
        iconClassName
    );

    return (
        <Tooltip
            arrow={arrow}
            enterDelay={500}
            enterNextDelay={500}
            id={id}
            placement={placement}
            title={label}
        >
            <IconButton
                className={buttonClass}
                id={`${id}-action`}
                onClick={onClick}
            >
                <Icon
                    className={iconClass}
                    style={{
                        color,
                        fontSize: size
                    }}
                >
                    {icon}
                </Icon>
            </IconButton>
        </Tooltip>
    );
};

IconComponent.propTypes = {
    arrow: PropTypes.bool,
    buttonClassName: PropTypes.string,
    className: PropTypes.string.prototype,
    classes: PropTypes.object.isRequired,
    color: PropTypes.string,
    icon: PropTypes.string.isRequired,
    iconClassName: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    onClick: PropTypes.func,
    placement: PropTypes.oneOf(['top', 'right', 'left', 'bottom']),
    size: PropTypes.number
};

IconComponent.defaultProps = {
    arrow: false,
    buttonClassName: null,
    className: null,
    color: null,
    iconClassName: null,
    label: '',
    onClick: Function.prototype,
    placement: 'bottom',
    size: null
};

export default withStyles(styles)(IconComponent);

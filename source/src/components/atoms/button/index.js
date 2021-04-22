// @packages
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const Actionbutton = ({
    className,
    classes,
    disabled,
    endIcon,
    id,
    label,
    onClick,
    startIcon
}) => {
    const ButtonStyle = classNames(
        classes.mainContainer,
        className
    );

    return (
        <Button
            className={ButtonStyle}
            disabled={disabled}
            id={id}
            onClick={onClick}
            variant="filled"
            endIcon={endIcon && (
                <Icon>
                    {endIcon}
                </Icon>
            )}
            startIcon={startIcon && (
                <Icon>
                    {startIcon}
                </Icon>
            )}
        >
            {label}
        </Button>
    );
};

Actionbutton.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
    endIcon: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    onClick: PropTypes.func,
    startIcon: PropTypes.string
};

Actionbutton.defaultProps = {
    className: null,
    disabled: false,
    endIcon: null,
    label: '',
    onClick: Function.prototype,
    startIcon: null
};

export default withStyles(styles)(Actionbutton);

// @packages
import PropTypes from 'prop-types';
import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

// @styles
import styles from './styles';

const InputField = ({
    classes,
    id,
    className,
    onClick,
    label,
    variant,
    size,
    icon,
    iconButtons,
    placeholder
}) => {
    const inputStyle = classNames(classes, className);

    const inputProps = () => {
        const defaultProps = {};

        if (icon) {
            defaultProps.endAdornment = (
                <InputAdornment position="end">
                    <Icon>
                        {icon}
                    </Icon>
                </InputAdornment>
            );
        }

        if (iconButtons?.length) {
            defaultProps.endAdornment = (
                <InputAdornment position="end">
                    {iconButtons.map((iconButton, index) => (
                        <IconButton onClick={Function.prototype} key={index}>
                            <Icon>
                                {iconButton.icon}
                            </Icon>
                        </IconButton>
                    ))}
                </InputAdornment>
            );
        }

        return { ...defaultProps };
    };

    return (
        <TextField
            className={inputStyle}
            id="input-with-icon-textfield"
            variant={variant}
            autoComplete="off"
            size={size}
            placeholder={placeholder}
            InputProps={inputProps()}
        />
    );
};

InputField.propTypes = {
    backgroundColor: PropTypes.string,
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    width: PropTypes.number,
    icon: PropTypes.string,
    iconButton: PropTypes.string
};

InputField.defaultProps = {
    backgroundColor: null,
    onClick: Function.prototype,
    icon: null,
    iconButton: null
};

export default withStyles(styles)(InputField);

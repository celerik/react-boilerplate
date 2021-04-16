// @packages
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const InputField = ({
    className,
    classes,
    disable,
    icon,
    iconButton,
    id,
    onChange,
    onClickIconButton,
    placeholder,
    size,
    value,
    variant
}) => {
    const handleChange = event => {
        onChange(event.target.value);
    };

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

        if (iconButton) {
            defaultProps.endAdornment = (
                <InputAdornment position="end">
                    <IconButton onClick={onClickIconButton} key={index}>
                        <Icon>
                            {iconButton}
                        </Icon>
                    </IconButton>
                </InputAdornment>
            );
        }

        return { ...defaultProps };
    };

    return (
        <TextField
            InputProps={inputProps()}
            autoComplete="off"
            className={inputStyle}
            disable={disable}
            id={`${id}-textField`}
            onChange={handleChange}
            placeholder={placeholder}
            size={size}
            value={value}
            variant={variant}
        />
    );
};

InputField.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    disable: PropTypes.bool,
    icon: PropTypes.string,
    iconButton: PropTypes.string,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onClickIconButton: PropTypes.func,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium']),
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    variant: PropTypes.oneOf(['filled', 'outlined', 'standard'])
};

InputField.defaultProps = {
    className: null,
    disable: false,
    icon: null,
    iconButton: null,
    onClickIconButton: Function.prototype,
    placeholder: '',
    size: 'medium',
    value: null,
    variant: 'standard'
};

export default withStyles(styles)(InputField);

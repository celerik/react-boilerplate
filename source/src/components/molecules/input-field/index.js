// @packages
import Icon from '@material-ui/core/Icon';
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
    endAdornment,
    icon,
    id,
    onChange,
    placeholder,
    rootClass,
    size,
    startAdornment,
    type,
    underline,
    value,
    variant
}) => {
    const handleChange = event => {
        onChange(event.target.value);
    };

    const inputStyle = classNames(classes, className);

    const inputProps = () => {
        const defaultProps = {};
        if (endAdornment || icon) {
            defaultProps.endAdornment = (
                <InputAdornment position="end">
                    {icon
                        ? (
                            <Icon>
                                {icon}
                            </Icon>
                        )
                        : endAdornment }
                </InputAdornment>
            );
        }

        if (startAdornment) {
            defaultProps.startAdornment = (
                <InputAdornment position="start">{startAdornment}</InputAdornment>
            );
        }

        return { ...defaultProps, disableUnderline: !underline, inputProps: { className: rootClass } };
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
            type={type}
            value={value}
            variant={variant}
        />
    );
};

InputField.propTypes = {
    className: PropTypes.object,
    classes: PropTypes.object.isRequired,
    disable: PropTypes.bool,
    endAdornment: PropTypes.string,
    icon: PropTypes.string,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    rootClass: PropTypes.object,
    size: PropTypes.oneOf(['small', 'medium']),
    startAdornment: PropTypes.string,
    type: PropTypes.string,
    underline: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    variant: PropTypes.oneOf(['filled', 'outlined', 'standard'])
};

InputField.defaultProps = {
    className: null,
    disable: false,
    endAdornment: '',
    icon: null,
    placeholder: '',
    rootClass: null,
    size: 'medium',
    startAdornment: '',
    type: 'string',
    underline: false,
    value: null,
    variant: 'standard'
};

export default withStyles(styles)(InputField);

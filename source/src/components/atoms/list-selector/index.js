// @packages
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// @styles
import styles from './styles';

const ListSelector = ({
    className,
    classes,
    id,
    placeholder,
    value,
    items,
    onChange
}) => {
    const selectorList = classNames(classes.container, className);

    const handleSelectOnChange = (evt) => {
        const { value } = evt.target;
        if (value) {
            const item = items.find(item => item.value === value);
            onChange({ item, value });
        }
    };

    return (
        <FormControl className={selectorList} id={id}>
            <InputLabel id={`${id}-placeholder`}>{placeholder}</InputLabel>
            <Select
                id={`${id}-select`}
                value={value}
                onChange={handleSelectOnChange}
                className={classes.select}
            >
                {items.map((item, index) => (
                    <MenuItem
                        value={item.value}
                        key={`${id}-select-option-${index}`}
                    >
                        {item.text}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

ListSelector.propTypes = {
    placeholder: PropTypes.string,
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any.isRequired,
        text: PropTypes.string.isRequired
    })),
    onChange: PropTypes.func.isRequired
};

ListSelector.defaultProps = {
    className: '',
    placeholder: 'selecciona prro',
    value: '',
    items: Array.prototype
};

export default withStyles(styles)(ListSelector);

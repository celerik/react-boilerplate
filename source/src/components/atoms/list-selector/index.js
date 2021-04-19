// @packages
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import Select from '@material-ui/core/Select';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const ListSelector = ({
    className,
    classes,
    id,
    itemDesProp,
    itemValProp,
    items,
    onChange,
    placeholder,
    value
}) => {
    const selectorList = classNames(classes.container, className);

    const handleSelectOnChange = (evt) => {
        const { value } = evt.target;
        if (value) {
            const item = items.find(item => item[itemValProp] === value);
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
                        value={item[itemValProp]}
                        key={`${id}-select-option-${index}`}
                    >
                        {item[itemDesProp]}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

ListSelector.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    itemDesProp: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any.isRequired,
        text: PropTypes.string.isRequired
    })),
    itemValProp: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string
};

ListSelector.defaultProps = {
    className: '',
    items: Array.prototype,
    placeholder: '',
    value: ''
};

export default withStyles(styles)(ListSelector);

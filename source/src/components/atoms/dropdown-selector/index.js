// @packages
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const Dropdown = ({
    classes,
    isExpanded,
    onChange,
    id,
    user,
    items
}) => {
    const [open, setOpen] = useState(false);

    const handleSelectOnChange = (evt) => {
        const { value } = evt.target;
        const item = items.find(item => item.value === value);

        onChange({
            item
        });
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
    <div className={classes.itemContainer} id={`${id}-selector-user`}>
    {!isExpanded && (
        <Icon className={classes.iconOnly}>
            {typeof user.icon === 'string'
                ? <Icon>{user.icon}</Icon>
                : user.icon}
        </Icon>
    )}
    {isExpanded && (
        <FormControl className={classes.formControlContainer}>
            <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={user.value}
                onChange={handleSelectOnChange}
                disableUnderline
            >
                {items.map((item) => (
                    <MenuItem value={item.value} key={item.value}>
                    {item.icon && (
                        <ListItemIcon className={classes.icon}>
                            <Icon>
                                {typeof item.icon === 'string'
                                    ? <Icon>{item.icon}</Icon>
                                    : item.icon}
                            </Icon>
                        </ListItemIcon>
                    )}
                    <Typography variant="inherit">{item.label}</Typography>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )}
    </div>

    );
};

Dropdown.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        icon: PropTypes.any.isRequired,
        value: PropTypes.string.isRequired
    })).isRequired,
    onChange: PropTypes.func.isRequired,
    user: PropTypes.shape({
        label: PropTypes.string.isRequired,
        icon: PropTypes.any.isRequired,
        value: PropTypes.string.isRequired
    }).isRequired
};

export default withStyles(styles)(Dropdown);

// @packages
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @styles
import { config } from '../../../config';

// @styles
import styles from './styles';

const DropdownUser = ({
    classes,
    id,
    isExpanded,
    items,
    onChange,
    value
}) => {
    const selectedValue = items.find(item => item.value === value) ?? {};
    const handleSelectOnChange = (evt) => {
        const { value } = evt.target;
        if (value) {
            const item = items.find(item => item.value === value);

            onChange({ item });
        }
    };

    const IconItem = ({ icon }) => (
        <ListItemIcon className={classes.icon}>
            <Icon>
                {typeof icon === 'string'
                    ? <Icon>{icon}</Icon>
                    : icon}
            </Icon>
        </ListItemIcon>
    );

    return (
        <div className={classes.itemContainer} id={`${id}-selector-user`}>
            {!isExpanded && (
                <Icon className={classes.iconOnly}>
                    {typeof selectedValue.icon === 'string'
                        ? <Icon>{selectedValue.icon}</Icon>
                        : selectedValue.icon}
                </Icon>
            )}
            {isExpanded && (
                <FormControl className={classes.formControlContainer}>
                    <TextField
                        select
                        value={value}
                        onChange={handleSelectOnChange}
                        SelectProps={{
                            MenuProps: { disablePortal: true }
                        }}
                        InputProps={{ disableUnderline: true }}
                        variant="outlined"
                        className={classes.selector}
                    >
                        {items.map((item) => (
                            <MenuItem value={item.value} key={item.value} id={item.value} className={classes.menuItem}>
                                <div className={classes.itemList}>
                                    {item.icon && (
                                        <IconItem icon={item.icon} />
                                    )}
                                    <Typography
                                        className={classes.labelItem}
                                        variant="inherit"
                                    >
                                        {item.label}
                                    </Typography>
                                </div>
                            </MenuItem>
                        ))}
                        <MenuItem className={classes.dropdownButton} onClick={Function.prototype}>
                            <Typography variant="inherit">{config.text.mainMenu.manageTeams}</Typography>
                            <IconItem icon="group" />
                        </MenuItem>
                    </TextField>
                </FormControl>
            )}
        </div>
    );
};

DropdownUser.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.any.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    })).isRequired,
    onChange: PropTypes.func.isRequired,
    team: PropTypes.shape({
        icon: PropTypes.any.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    }).isRequired
};

export default withStyles(styles)(DropdownUser);

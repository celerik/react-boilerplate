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

const IconItem = withStyles(styles)(({
    classes,
    icon
}) => (
    <ListItemIcon className={classes.icon}>
        {icon
            ? (
                <Icon>
                    {typeof icon === 'string'
                        ? <Icon>{icon}</Icon>
                        : icon}
                </Icon>
            )
            : (
                <div className={classes.defaultIcon} />
            )}
    </ListItemIcon>
));

const DropdownSelector = ({
    classes,
    id,
    isExpanded,
    items,
    onChange,
    itemValueName,
    itemDescriptionName,
    value
}) => {
    const selectedValue = items.find(item => item[itemValueName] === value) ?? {};
    const handleSelectOnChange = (evt) => {
        onChange(evt.target.value);
    };

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
                            <MenuItem
                                className={classes.menuItem}
                                key={item[itemValueName]}
                                value={item[itemValueName]}
                            >
                                <div className={classes.itemList}>
                                    <IconItem icon={item.icon} />
                                    <Typography
                                        className={classes.labelItem}
                                        variant="inherit"
                                    >
                                        {item[itemDescriptionName]}
                                    </Typography>
                                </div>
                            </MenuItem>
                        ))}
                        <MenuItem className={classes.dropdownButton} onClick={Function.prototype}>
                            <Typography variant="inherit">
                                {config.text.mainMenu.manageTeams}
                            </Typography>
                            <IconItem icon="group" />
                        </MenuItem>
                    </TextField>
                </FormControl>
            )}
        </div>
    );
};

DropdownSelector.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    itemDescriptionName: PropTypes.string,
    itemValueName: PropTypes.string,
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
    }).isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

DropdownSelector.defaultProps = {
    itemDescriptionName: 'teamName',
    itemValueName: 'teamId'
};

export default withStyles(styles)(DropdownSelector);

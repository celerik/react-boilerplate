// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles, useTheme } from '@material-ui/core';

// @scripts
import IconButton from '../../atoms/icon-button';

// @styles
import styles from './styles';

const ActionsStop = ({
    actions,
    classes,
    defaultColor,
    id,
    currentAction,
    selectAction
}) => {
    const theme = useTheme();

    const getColor = (name) => {
        const color = currentAction === name
            ? theme.palette.text.primary
            : theme.palette.text.contrastText;
        return color;
    };

    return (
        <>
            {actions.map((action, index) => (
                <IconButton
                    arrow
                    buttonClassname={classes.actions}
                    color={defaultColor || getColor(action.name)}
                    icon={action.icon}
                    id={`${id}-action-${index}`}
                    key={index}
                    label={action.name}
                    onClick={() => selectAction(action.onClick, action.name)}
                    placement="top"
                />
            ))}
        </>
    );
};

ActionsStop.propTypes = {
    classes: PropTypes.object.isRequired,
    currentAction: PropTypes.string.isRequired,
    defaultColor: PropTypes.string,
    id: PropTypes.string.isRequired,
    selectAction: PropTypes.func.isRequired,
    actions: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
        name: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }))
};

ActionsStop.defaultProps = {
    actions: [],
    defaultColor: null
};

export default withStyles(styles)(ActionsStop);

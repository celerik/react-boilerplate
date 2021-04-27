// @packages
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { withStyles, useTheme } from '@material-ui/core';

// @scrips
import IconButton from '../../atoms/icon-button';

// @styles
import styles from './styles';
import classNames from 'classnames';

const Stop = ({
    actions,
    classes,
    content,
    id,
    stopName
}) => {
    const [actionsVisible, setActionsVisibility] = useState(false);
    const [currentOption, setCurrentOption] = useState(false);
    const stopClass = classNames(classes.onFocus, classes.stopNumber);
    const theme = useTheme();

    const onHoverActions = () => {
        setActionsVisibility(true);
    };

    const selectAction = (rollback, action) => {
        rollback();
        setCurrentOption(action);
    };

    return (
        <li
            className={classes.stopItem}
            onFocus={onHoverActions}
            onMouseLeave={() => setActionsVisibility(false)}
            onMouseOver={onHoverActions}
        >
            <span className={actionsVisible ? stopClass : classes.stopNumber}>
                {content}
            </span>
            {stopName}
            {actionsVisible && (
                <div className={classes.actionsContainer}>
                    {actions.map((action, index) => (
                        <IconButton
                            buttonClassname={classes.actions}
                            key={index}
                            placement="top"
                            color={currentOption === action.name
                                ? theme.palette.text.primary
                                : theme.palette.text.contrastText}
                            arrow
                            onClick={() => selectAction(action.onClick, action.name)}
                            id={`${id}-action-${index}`}
                            label={action.name}
                            icon={action.icon}
                        />
                    ))}
                </div>
            )}
        </li>
    );
};

Stop.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
        onClick: PropTypes.func.isRequired
    })),
    classes: PropTypes.object.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    id: PropTypes.string.isRequired,
    stopName: PropTypes.string.isRequired
};

Stop.defaultProps = {
    actions: Array.prototype
};

export default withStyles(styles)(Stop);

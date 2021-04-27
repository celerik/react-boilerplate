// @packages
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import classNames from 'classnames';
import { withStyles, useTheme } from '@material-ui/core';

// @scrips
import IconButton from '../../atoms/icon-button';

// @styles
import styles from './styles';

const Stop = ({
    actions,
    lastItem,
    classes,
    content,
    onHoverSegment,
    id,
    stopName
}) => {
    const [actionsVisible, setActionsVisibility] = useState(false);
    const [currentOption, setCurrentOption] = useState(false);
    const stopClass = classNames(classes.onFocus, classes.stopNumber);
    const separatorLine = classNames(classes.onFocusLine, classes.stopLine);
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
            <div className={classes.stopIcon}>
                <span className={actionsVisible ? stopClass : classes.stopNumber}>
                    {content}
                </span>
                {!lastItem && (<span className={onHoverSegment ? separatorLine : classes.stopLine} />)}
            </div>
            <div className={classes.title}>
                <div className={classes.headerOptions}>
                    {stopName}
                    {!actionsVisible && (
                        <div className={classes.actionsContainer}>
                            {actions.map((action, index) => (
                                <IconButton
                                    arrow
                                    buttonClassname={classes.actions}
                                    color={currentOption === action.name
                                        ? theme.palette.text.primary
                                        : theme.palette.text.contrastText}
                                    icon={action.icon}
                                    id={`${id}-action-${index}`}
                                    key={index}
                                    label={action.name}
                                    onClick={() => selectAction(action.onClick, action.name)}
                                    placement="top"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
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
    lastItem: PropTypes.bool,
    onHoverSegment: PropTypes.bool,
    stopName: PropTypes.string.isRequired
};

Stop.defaultProps = {
    actions: Array.prototype,
    lastItem: false,
    onHoverSegment: true
};

export default withStyles(styles)(Stop);

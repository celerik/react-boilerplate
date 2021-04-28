// @packages
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles, useTheme } from '@material-ui/core';

// @scrips
import IconButton from '../../atoms/icon-button';
import StopIcon from '../../atoms/stop-icon';
import SubStopsList from '../sub-stops-list';
import { config } from '../../../config';

// @styles
import styles from './styles';

const Stop = ({
    actions,
    actionsContent,
    classes,
    content,
    id,
    lastItem,
    onHoverSegment,
    stopName
}) => {
    const [actionsVisible, setActionsVisibility] = useState(false);
    const [currentOption, setCurrentOption] = useState('');
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
                <StopIcon
                    className={actionsVisible ? stopClass : classes.stopNumber}
                    id={`${id}-stop-icon-}`}
                    isListItem
                    label={!lastItem && content}
                />
                {!lastItem && (<span className={onHoverSegment ? separatorLine : classes.stopLine} />)}
            </div>
            <div className={classes.title}>
                <div className={classes.headerOptions}>
                    <Typography variant="body2" style={{ fontWeight: currentOption && 'bold' }}>{stopName}</Typography>
                    {actionsVisible && (
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
                <div className={classes.subStopsContainer}>
                    {currentOption === config.text.editServicePattern.addStopBelow && (
                        <SubStopsList />
                    )}
                </div>
            </div>
            <div className={classes.bodyOptions}>
                {actionsContent}
            </div>
        </li>
    );
};

Stop.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
        onClick: PropTypes.func.isRequired
    })),
    actionsContent: PropTypes.node,
    classes: PropTypes.object.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    id: PropTypes.string.isRequired,
    lastItem: PropTypes.bool,
    onHoverSegment: PropTypes.bool,
    stopName: PropTypes.string.isRequired
};

Stop.defaultProps = {
    actions: Array.prototype,
    actionsContent: null,
    lastItem: false,
    onHoverSegment: false
};

export default withStyles(styles)(Stop);

// @packages
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

// @scrips
import ActionsStop from '../actions-stop';
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
    const stopClass = classNames(classes.onFocus, classes.stopNumber);
    const separatorLine = classNames(classes.onFocusLine, classes.stopLine);

    const [currentAction, setCurrentOption] = useState('');

    const selectAction = (rollback, action) => {
        rollback();
        setCurrentOption(action);
    };

    const onHoverActions = () => {
        setActionsVisibility(true);
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
                    label={!lastItem && content}
                />
                {!lastItem && (<span className={onHoverSegment ? separatorLine : classes.stopLine} />)}
            </div>
            <div className={classes.title}>
                <div className={classes.headerOptions}>
                    <Typography variant="body2" style={{ fontWeight: currentAction && 'bold' }}>{stopName}</Typography>
                    {actionsVisible && (
                        <div className={classes.actionsContainer}>
                            <ActionsStop
                                actions={actions}
                                id={`${id}-actions`}
                                currentAction={currentAction}
                                selectAction={selectAction}
                            />
                        </div>
                    )}
                </div>
                <div className={classes.subStopsContainer}>
                    {currentAction === config.text.editServicePattern.addStopBelow && (
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

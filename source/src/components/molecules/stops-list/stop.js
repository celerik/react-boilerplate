// @packages
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
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
import IconButton from '../../atoms/icon-button';
import BaselineConnect from '../../../services/baseline-connect';
import { useSetActiveStops } from '../../../providers/stops/actions';

// @constants
const segmentEdit = 'segmentEdit';

const Stop = ({
    classes,
    content,
    currentAction,
    isSelected,
    lastItem,
    onSelectAction,
    stopId,
    stopName,
    to
}) => {
    const id = `stop-${stopId}`;
    const [actionsVisible, setActionsVisibility] = useState(false);
    const [segmentHover, setSegmentHover] = useState(false);
    const [historyPaths, setHistoryPaths] = useState([]);

    const onHoverActions = () => {
        setActionsVisibility(true);
    };

    const onGetHistoryPaths = async () => {
        const paths = await BaselineConnect.getHistoryPaths(stopId, to);
        setHistoryPaths(paths);
    };

    useEffect(() => {
        if (currentAction === segmentEdit) onGetHistoryPaths();
    }, [currentAction]);

    return (
        <li
            className={classes.stopItem}
            onFocus={onHoverActions}
            id={id}
            onMouseLeave={() => setActionsVisibility(false)}
            onMouseOver={onHoverActions}
        >
            <div className={classes.stopIcon}>
                <StopIcon
                    className={classNames(
                        classes.stopNumber,
                        actionsVisible && classes.onFocus
                    )}
                    stopId={stopId}
                    label={!lastItem && content}
                />
                {!lastItem && (
                    <div
                        className={classes.segmentContainer}
                        onFocus={() => setSegmentHover(true)}
                        onMouseLeave={() => setSegmentHover(false)}
                        onMouseOver={() => setSegmentHover(true)}
                    >
                        <span className={classes.stopLine} />
                        {segmentHover && (
                            <IconButton
                                className={classes.segmentEdit}
                                icon="edit"
                                onClick={() => onSelectAction(segmentEdit)}
                                label={config.text.editServicePattern.editSegment}
                                size={16}
                            />
                        )}
                    </div>
                )}
            </div>
            <div className={classes.infoContainer}>
                <div className={classes.title}>
                    <Typography
                        variant="body2"
                        style={{ fontWeight: isSelected && 'bold' }}
                    >
                        {stopName}
                    </Typography>
                    {actionsVisible && (
                        <div className={classes.actionsContainer}>
                            <ActionsStop
                                id={`${id}-actions`}
                                currentAction={currentAction}
                                onSelectAction={onSelectAction}
                            />
                        </div>
                    )}
                </div>
                <div className={classes.subStopsContainer}>
                    {currentAction === config.masterData.stopActions.add.name && (
                        <SubStopsList />
                    )}
                    {currentAction === segmentEdit && (
                        <SubStopsList
                            id={`${id}-segment-edit`}
                            items={historyPaths}
                        />
                    )}
                </div>
            </div>
        </li>
    );
};

Stop.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    currentAction: PropTypes.string,
    lastItem: PropTypes.bool,
    stopId: PropTypes.string.isRequired,
    stopName: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
};

Stop.defaultProps = {
    currentAction: null,
    lastItem: false
};

export default withStyles(styles)(Stop);

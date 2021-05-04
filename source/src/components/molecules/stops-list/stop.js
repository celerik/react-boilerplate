// @packages
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

// @scrips
import ActionsStop from '../actions-stop';
import BaselineConnect from '../../../services/baseline-connect';
import IconButton from '../../atoms/icon-button';
import StopIcon from '../../atoms/stop-icon';
import SubStopsList from '../sub-stops-list';
import { config } from '../../../config';
import { useDispatch } from 'react-redux';

// @styles
import styles from './styles';
import { setMapHistoryPaths } from '../../../actions';
import { useSetActivePaths } from '../../../providers/stops/actions';

// @constants
const segmentEdit = 'segmentEdit';

const Stop = ({
    classes,
    content,
    currentAction,
    isSelected,
    lastItem,
    onSelectAction,
    pathId,
    stopId,
    stopName,
    to
}) => {
    const id = `stop-${stopId}`;
    const dispatch = useDispatch();
    const [actionsVisible, setActionsVisibility] = useState(false);
    const [segmentHover, setSegmentHover] = useState(false);
    const [historyPaths, setHistoryPaths] = useState([]);
    const setActivePaths = useSetActivePaths();

    const onHoverActions = () => {
        setActionsVisibility(true);
    };

    const onHoverSegment = (hover) => {
        if (hover) {
            setActivePaths([pathId]);
        } else {
            setActivePaths([]);
        }

        setSegmentHover(hover);
    };

    const onHoverHistoryPath = (pathId) => {
        console.log(pathId);
        setActivePaths([pathId]);
    };

    const onBlurHistoryPath = (pathId) => {
        setActivePaths([]);
    };

    const onGetHistoryPaths = async () => {
        const [paths, pathsGeoJSON] = await BaselineConnect.getHistoryPaths(stopId, to);
        dispatch(setMapHistoryPaths(pathsGeoJSON));
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
                        onFocus={() => onHoverSegment(true)}
                        onMouseLeave={() => onHoverSegment(false)}
                        onMouseOver={() => onHoverSegment(true)}
                    >
                        <span className={classes.stopLine} />
                        {segmentHover && currentAction !== segmentEdit && (
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
                        <SubStopsList
                            actions={[
                                {
                                    icon: 'check',
                                    name: 'add',
                                    onClick: console.log
                                }
                            ]}
                            items={[]}
                        />
                    )}
                    {currentAction === segmentEdit && (
                        <SubStopsList
                            actions={[
                                {
                                    icon: 'check',
                                    name: 'add',
                                    onClick: console.log
                                }
                            ]}
                            items={historyPaths.map((item, index) => ({
                                id: item.pathId,
                                name: `Route ${index + 1}`
                            }))}
                            onHoverItem={onHoverHistoryPath}
                            onBlurItem={onBlurHistoryPath}
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

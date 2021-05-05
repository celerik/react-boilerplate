// @packages
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core';

// @scrips
import ActionsStop from '../actions-stop';
import BaselineConnect from '../../../services/baseline-connect';
import IconButton from '../../atoms/icon-button';
import StopIcon from '../stop-icon';
import SubStopsList from '../sub-stops-list';
import { config } from '../../../config';
import { setMapHistoryPaths } from '../../../actions';
import { useSetActiveAction, useSetActivePaths } from '../../../providers/stops/actions';
import { useStopsContext } from '../../../providers/stops';

// @styles
import styles from './styles';

const Stop = ({
    classes,
    content,
    isSelected,
    lastItem,
    pathId,
    stopId,
    stopName,
    to
}) => {
    const id = `stop-${stopId}`;
    const setActiveAction = useSetActiveAction();
    const dispatch = useDispatch();
    const [actionsVisible, setActionsVisibility] = useState(false);
    const [segmentHover, setSegmentHover] = useState(false);
    const [historyPaths, setHistoryPaths] = useState([]);
    const { activeAction } = useStopsContext();
    const setActivePaths = useSetActivePaths();

    const isActiveStop = activeAction.stopId === stopId;
    const isEditingSegment = activeAction.action === config.masterData.stopActions.edit.name;

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

    const onHoverHistoryPath = (pathId) => setActivePaths([pathId]);
    const onBlurHistoryPath = () => setActivePaths([]);

    const onGetHistoryPaths = async () => {
        const [paths, pathsGeoJSON] = await BaselineConnect.getHistoryPaths(stopId, to);
        dispatch(setMapHistoryPaths(pathsGeoJSON));
        setHistoryPaths(paths);
    };

    useEffect(() => {
        if (!isActiveStop) {
            return;
        }

        if (isEditingSegment) onGetHistoryPaths();
    }, [activeAction]);

    const canEditSegment = segmentHover && !(isActiveStop && isEditingSegment);

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
                        {canEditSegment && (
                            <IconButton
                                className={classes.segmentEdit}
                                icon="edit"
                                onClick={() => setActiveAction(
                                    stopId, config.masterData.stopActions.edit.name
                                )}
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
                        style={{ fontWeight: isActiveStop && 'bold' }}
                    >
                        {stopName}
                    </Typography>
                    {actionsVisible && (
                        <div className={classes.actionsContainer}>
                            <ActionsStop
                                stopId={stopId}
                            />
                        </div>
                    )}
                </div>
                {isActiveStop && (
                    <div className={classes.subStopsContainer}>
                        {activeAction === config.masterData.stopActions.add.name && (
                        <SubStopsList
                            actions={[
                                {
                                    icon: 'check',
                                    name: 'add',
                                    onClick: Function.prototype
                                }
                            ]}
                            items={[]}
                        />
                        )}
                        {isEditingSegment && (
                            <SubStopsList
                                actions={[
                                    {
                                        icon: 'check',
                                        name: 'add',
                                        onClick: Function.prototype
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
                )}
            </div>
        </li>
    );
};

Stop.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    pathId: PropTypes.string.isRequired,
    lastItem: PropTypes.bool,
    stopId: PropTypes.string.isRequired,
    stopName: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
};

Stop.defaultProps = {
    lastItem: false
};

export default withStyles(styles)(Stop);

// @packages
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core';

// @scrips
import ModalDialog from '../../organisms/alert-dialog';
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
import { globalUI } from '../../../core';

const Stop = ({
    classes,
    content,
    onRerouteSegment,
    lastItem,
    pathId,
    stopId,
    stopName,
    to
}) => {
    const [actionsVisible, setActionsVisibility] = useState(false);
    const [segmentHover, setSegmentHover] = useState(false);
    const [historyPaths, setHistoryPaths] = useState([]);
    const [selectedHistoryPath, selectHistoryPath] = useState(null);

    const { activeAction } = useStopsContext();
    const setActiveAction = useSetActiveAction();
    const dispatch = useDispatch();
    const setActivePaths = useSetActivePaths();

    const id = `stop-${stopId}`;

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

    const handleOnReroute = () => {
        try {
            const { pathId, pathGeometry } = historyPaths.find(path => path.pathId === selectedHistoryPath);
            onRerouteSegment(pathId, pathGeometry);
            selectHistoryPath(null);
        } catch (error) {
            globalUI.showAlertNotificationError(
                config.text.common.error,
                error.message
            );
        }
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
                                actions={[{
                                    icon: 'check',
                                    name: 'add',
                                    onClick: selectHistoryPath
                                }]}
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
            <ModalDialog
                title={config.text.editServicePattern.changeRoute}
                visible={selectedHistoryPath}
                onClose={() => selectHistoryPath(null)}
                isExitButtonVisible={false}
                content={config.text.editServicePattern.changeRouteConfirm}
                actions={[{
                    name: config.text.servicePatternsMenu.cancel,
                    onClick: () => selectHistoryPath(null)
                }, {
                    name: config.text.servicePatternsMenu.confirm,
                    filled: true,
                    onClick: handleOnReroute
                }]}
            />
            </div>
        </li>
    );
};

Stop.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    lastItem: PropTypes.bool,
    onRerouteSegment: PropTypes.func,
    pathId: PropTypes.string.isRequired,
    stopId: PropTypes.string.isRequired,
    stopName: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
};

Stop.defaultProps = {
    lastItem: false,
    onRerouteSegment: Function.prototype
};

export default withStyles(styles)(Stop);

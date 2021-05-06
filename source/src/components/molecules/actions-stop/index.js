// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles, useTheme } from '@material-ui/core';

// @scripts
import IconButton from '../../atoms/icon-button';
import { config } from '../../../config';

// @styles
import styles from './styles';
import { useSetActiveAction } from '../../../providers/stops/actions';
import { useStopsContext } from '../../../providers/stops';

// @constants
const defaultActions = [
    config.masterData.stopActions.add.name,
    config.masterData.stopActions.checkpoint.name,
    config.masterData.stopActions.replace.name,
    config.masterData.stopActions.delete.name
];

const ActionsStop = ({
    actions,
    classes,
    stopId
}) => {
    const theme = useTheme();
    const { activeAction } = useStopsContext();
    const setActiveAction = useSetActiveAction();

    const getColor = (name) => {
        const color = activeAction.action === name && activeAction.stopId === stopId
            ? theme.palette.text.primary
            : theme.palette.text.contrastText;
        return color;
    };

    return (
        <>
            {Object.values(config.masterData.stopActions).map((action, index) =>
                actions.includes(action.name) && (
                    <IconButton
                        arrow
                        buttonClassname={classes.actions}
                        color={getColor(action.name)}
                        icon={action.icon}
                        id={`${stopId}-action-${index}`}
                        key={index}
                        label={config.text.editServicePattern[action.name]}
                        onClick={() => setActiveAction(stopId, action.name)}
                        placement="top"
                    />
                ))}
        </>
    );
};

ActionsStop.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.oneOf(Object.values(config.masterData.stopActions))),
    classes: PropTypes.object.isRequired,
    stopId: PropTypes.string.isRequired
};

ActionsStop.defaultProps = {
    actions: defaultActions
};

export default withStyles(styles)(ActionsStop);

// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles, useTheme } from '@material-ui/core';

// @scripts
import IconButton from '../../atoms/icon-button';
import { config } from '../../../config';

// @styles
import styles from './styles';

const ActionsStop = ({
    classes,
    currentAction,
    defaultColor,
    id,
    onSelectAction
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
            {Object.values(config.masterData.stopActions).map((action, index) => (
                <IconButton
                    arrow
                    buttonClassname={classes.actions}
                    color={defaultColor || getColor(action.name)}
                    icon={action.icon}
                    id={`${id}-action-${index}`}
                    key={index}
                    label={config.text.editServicePattern[action.name]}
                    onClick={() => onSelectAction(action.name)}
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
    onSelectAction: PropTypes.func.isRequired
};

ActionsStop.defaultProps = {
    defaultColor: null
};

export default withStyles(styles)(ActionsStop);

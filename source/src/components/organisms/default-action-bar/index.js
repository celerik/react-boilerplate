// @packages
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { useTheme, withStyles } from '@material-ui/core';

// @scripts
import ActionBar from '../../atoms/action-bar';
import ActionItem from './action-item';
import styles from './styles';
import { config } from '../../../config';
import { dimensions } from '../../../styles/global';

const DefaultActionBar = ({
    classes,
    id,
    isExpanded,
    onCollapse,
    onExpand,
    teamColor,
    width
}) => {
    const theme = useTheme();
    const name = useSelector(state => state.user.account.name);

    const topActions = [
        isExpanded && (
            <Typography
                className={classes.textName}
                key="user-name"
                variant="body2"
            >
                {name}
            </Typography>
        ),
        <ActionItem
            color={theme.palette.text.primary}
            expanded={isExpanded}
            description={config.text.mainMenu.teamName}
            icon={(
                <div
                    className={classes.teamIcon}
                    style={{ backgroundColor: teamColor }}
                />
            )}
            key="home1"
        />,
        <ActionItem
            color={theme.palette.text.primary}
            expanded={isExpanded}
            description={config.text.mainMenu.dataExplorer}
            icon="data_usage"
            key="home2"
        />,
        isExpanded && (
            <Divider
                className={classes.divider}
                key="divider"
                variant="fullWidth"
            />
        ),
        <ActionItem
            color={theme.palette.text.primary}
            expanded={isExpanded}
            description={config.text.mainMenu.projects}
            icon="description"
            key="data-explorer"
        />
    ].filter(Boolean);

    return (
        <ActionBar
            backgroundColor={theme.palette.backgroundColor}
            id={id}
            onClickAway={onCollapse}
            onClickInside={onExpand}
            topActions={topActions}
            width={width}
        />
    );
};

DefaultActionBar.propTypes = {
    classes: PropTypes.object.isRequired,
    isExpanded: PropTypes.bool,
    onExpand: PropTypes.func.isRequired,
    onCollapse: PropTypes.func.isRequired,
    teamColor: PropTypes.string,
    id: PropTypes.string.isRequired,
    width: PropTypes.number
};

DefaultActionBar.defaultProps = {
    isExpanded: false,
    teamColor: '#B4B4B4',
    width: dimensions.MAIN_MENU_EXPANDED_WIDTH
};

export default withStyles(styles)(DefaultActionBar);

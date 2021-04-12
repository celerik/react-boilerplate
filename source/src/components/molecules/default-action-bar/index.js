// @packages
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { useTheme, withStyles } from '@material-ui/core';

// @scripts
import ActionBar from '../../atoms/action-bar';
import ActionItem from './action-item';
import UserSelectorDropdown from '../dropdown-selector';
import styles from './styles';
import { config } from '../../../config';
import { dimensions } from '../../../styles/global';
import { useHistory } from 'react-router';

const DefaultActionBar = ({
    classes,
    id,
    isExpanded,
    onCollapse,
    onExpand,
    width
}) => {
    const theme = useTheme();
    const name = useSelector(state => state.user.account.name);
    const [team, setTeam] = useState({});
    const history = useHistory();

    const onChangeUser = ({ item }) => {
        setTeam(item);
    };

    const onSelectItem = item => (event) => {
        event.stopPropagation();
        onCollapse();
        history.push(item);
    };

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
        <UserSelectorDropdown
            isExpanded={isExpanded}
            onChange={onChangeUser}
            team={team}
            items={[]}
            key="home1"
            onClick={onSelectItem('/dashboard/home1')}
        />,
        <ActionItem
            color={theme.palette.text.secondary}
            description={config.text.mainMenu.dataExplorer}
            expanded={isExpanded}
            icon="data_usage"
            key="home2"
            onClick={onSelectItem('/dashboard/home2')}
        />,
        isExpanded && (
            <Divider
                className={classes.divider}
                key="divider"
                variant="fullWidth"
            />
        ),
        <ActionItem
            color={theme.palette.text.secondary}
            expanded={isExpanded}
            description={config.text.mainMenu.projects}
            icon="description"
            key="projects"
            onClick={onSelectItem(config.routes.dashboard.projects.url)}
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
    id: PropTypes.string.isRequired,
    width: PropTypes.number
};

DefaultActionBar.defaultProps = {
    isExpanded: false,
    width: dimensions.MAIN_MENU_EXPANDED_WIDTH
};

export default withStyles(styles)(DefaultActionBar);

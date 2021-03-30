// @packages
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';

// @scripts
import DefaultActionBar from '../../organisms/default-action-bar';
import styles from './styles';
import { dimensions } from '../../../styles/global';

const TemplateDashboard = ({
    classes,
    children
}) => {
    const [isMenuExpanded, setMenuExpanded] = useState(false);

    const menuWidth = isMenuExpanded
        ? dimensions.MAIN_MENU_EXPANDED_WIDTH
        : dimensions.MAIN_MENU_COLLAPSED_WIDTH;

    return (
        <div className={classes.mainContainer}>
            <DefaultActionBar
                isExpanded={isMenuExpanded}
                onExpand={() => setMenuExpanded(true)}
                onCollapse={() => setMenuExpanded(false)}
                width={menuWidth}
            />
            <div
                className={classes.infoContainer}
                style={{ width: `calc(100% - ${menuWidth}px)` }}
            >
                {children}
            </div>
        </div>
    );
}

TemplateDashboard.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
};

export default withStyles(styles)(TemplateDashboard);

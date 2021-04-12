// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

// @scripts
import Item from '../../atoms/item';

// @styles
import styles from './styles';

const ListActions = ({
    actions,
    classes,
    id,
    items
}) => (
    <div className={classes.mainContainer} id={`${id}-item-list`}>
        {items.map((element) => (
            <>
                <Item
                    className={classes.itemList}
                    id={element.projectId}
                    text={element.projectName}
                    iconButtons={actions}
                />
                <Divider
                    className={classes.divider}
                    variant="fullWidth"
                />
            </>
        ))}
    </div>

);

ListActions.propTypes = {
    actions: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }).isRequired,
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired
    })).isRequired
};

export default withStyles(styles)(ListActions);

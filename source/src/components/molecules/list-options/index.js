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
    classes,
    id,
    items
}) => (
    <div className={classes.mainContainer} id={`${id}-item-list`}>
        {items.map((element, index) => (
            <>
                <Item
                    className={classes.itemList}
                    key={index}
                    text={element.text}
                    iconButtons={[{ icon: 'content_copy' }, { icon: 'east' }]}
                />
                <Divider
                    className={classes.divider}
                    key="divider"
                    variant="fullWidth"
                />
            </>
        ))}
    </div>

);

ListActions.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired
    })).isRequired
};

export default withStyles(styles)(ListActions);

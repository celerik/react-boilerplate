// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @script
import Item from '../../atoms/item';

// @styles
import styles from './styles';

const actions = [
    {
        icon: 'add_circle',
        name: 'add',
        onClick: Function.prototype
    }
];

const SubStopsList = ({
    actions,
    classes,
    id,
    items
}) => (
    <div className={classes.listContainer} id={id}>
        {items.map((item, index) => (
            <Item
                className={classes.item}
                key={`${id}-sub-stop-${index}`}
                text={item.name}
                iconButtons={actions}
            />
        ))}
    </div>
);

SubStopsList.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    })),
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        nameStop: PropTypes.string.isRequired
    }))
};

SubStopsList.defaultProps = {
    actions,
    items: []
};

export default withStyles(styles)(SubStopsList);

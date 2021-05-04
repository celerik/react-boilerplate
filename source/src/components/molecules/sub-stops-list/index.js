// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @script
import Item from '../../atoms/item';

// @styles
import styles from './styles';

const SubStopsList = ({
    actions,
    classes,
    desPropName,
    id,
    items,
    onBlurItem,
    onHoverItem,
    valPropName
}) => (
    <div className={classes.listContainer} id={id}>
        {items.map((item, index) => (
            <Item
                className={classes.item}
                iconButtons={actions}
                key={`${id}-sub-stop-${index}`}
                onBlur={() => onBlurItem(item[valPropName])}
                onHover={() => {
                    console.log(item);
                    onHoverItem(item[valPropName])
                }}
                text={item[desPropName]}
                value={item[valPropName]}
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
    desPropName: PropTypes.string,
    id: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        nameStop: PropTypes.string.isRequired
    })),
    onBlur: PropTypes.func.isRequired,
    onHover: PropTypes.func.isRequired,
    valPropName: PropTypes.string
};

SubStopsList.defaultProps = {
    actions: [],
    desPropName: 'name',
    items: [],
    onBlur: Function.prototype,
    onHover: Function.prototype,
    valPropName: 'id'
};

export default withStyles(styles)(SubStopsList);

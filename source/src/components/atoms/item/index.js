// @packages
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const Item = ({
    className,
    classes,
    iconButtons,
    id,
    text
}) => {
    const itemContainer = classNames(classes.itemContainer, className);

    return (
        <div className={itemContainer} id={`${id}-item-element`}>
            <Typography>
                {text}
            </Typography>
            <div>
            {iconButtons.map((iconButton) => (
                <Tooltip
                    title={iconButton.name}
                    key={`${id}-${iconButton.name}-tooltip`}
                    enterDelay={500}
                    enterNextDelay={500}
                >
                    <IconButton
                        className={classes.iconButton}
                        onClick={(event) => iconButton.onClick(id, text, event)}
                    >
                        <Icon>
                            {iconButton.icon}
                        </Icon>
                    </IconButton>
                </Tooltip>
            ))}
            </div>
        </div>
    );
};

Item.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    iconButtons: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    })),
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

Item.defaultProps = {
    className: '',
    iconButtons: Array.prototype
};

export default withStyles(styles)(Item);

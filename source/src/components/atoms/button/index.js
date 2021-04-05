// @packages
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';

// @scripts
import { dimensions } from '../../../styles/global';

// @styles
import styles from './styles';

const ActionButtom = ({
    classes,
    id,
    className,
    onClick,
    label
}) => {
    const ButtonStyle = classNames(classes, className);

    return (
        <Button
            className={ButtonStyle}
            id={id}
            onClick={onClick}
        >
            {label}
        </Button>
    );
};

ActionButtom.propTypes = {
    backgroundColor: PropTypes.string,
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    width: PropTypes.number
};

ActionButtom.defaultProps = {
    backgroundColor: null,
    onClick: Function.prototype,
    width: dimensions.MAIN_MENU_COLLAPSED_WIDTH
};

export default withStyles(styles)(ActionButtom);

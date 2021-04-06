// @packages
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const ActionButtom = ({
    className,
    classes,
    id,
    label,
    onClick
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
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    onClick: PropTypes.func
};

ActionButtom.defaultProps = {
    className: null,
    label: '',
    onClick: Function.prototype
};

export default withStyles(styles)(ActionButtom);

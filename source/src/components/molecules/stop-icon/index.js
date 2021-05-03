// @packages
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { makeStyles, withStyles } from '@material-ui/core';

// @scripts
import ModalActions from '../modal-actions';

// @styles
import styles from './styles';

const customClasses = makeStyles({
    main: props => ({
        backgroundColor: `${props.color} !important`,
        '&:before': {
            border: `${props.color} 2px solid !important`
        }
    })
});

const StopIcon = ({
    className,
    classes,
    color,
    id,
    label,
    modalOn
}) => {
    const colorClasses = customClasses({ color });

    return (
        <>
            {modalOn && (<ModalActions name="" description="" />)}
            <span
                className={classNames(
                    className,
                    classes.mainContainer,
                    colorClasses.main
                )}
                id={id}
            >
                {label || <LocationOnIcon />}
            </span>
        </>
    );
};

StopIcon.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    color: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    modalOn: PropTypes.bool
};

StopIcon.defaultProps = {
    className: null,
    color: null,
    modalOn: false
};

export default withStyles(styles)(StopIcon);

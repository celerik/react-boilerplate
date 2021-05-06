// @packages
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';
import { withStyles } from '@material-ui/core';

// @scripts
import styles from './styles';

const BackToButton = ({
    classes,
    id,
    label,
    onClick,
    to
}) => {
    const history = useHistory();

    const handleOnClick = () => {
        onClick();

        if (to) {
            history.push(to);
            return;
        }

        history.goBack();
    };

    return (
        <div
            className={classes.mainContainer}
            id={id}
            tabIndex={0}
            role="button"
            onKeyDown={Function.prototype}
            onClick={handleOnClick}
        >
            <ArrowBackIcon />
            <Typography
                className={classes.text}
                variant="body1"
            >
                {label}
            </Typography>
        </div>
    );
};

BackToButton.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    to: PropTypes.string
};

BackToButton.defaultProps = {
    onClick: Function.prototype,
    to: undefined
};

export default withStyles(styles)(BackToButton);

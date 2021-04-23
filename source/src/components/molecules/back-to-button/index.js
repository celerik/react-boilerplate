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
    to
}) => {
    const history = useHistory();

    const onClick = () => {
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
            focusable
            tabIndex={0}
            role="button"
            onKeyDown={Function.prototype}
            onClick={onClick}
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
    to: PropTypes.string
};

BackToButton.defaultProps = {
    to: undefined
};

export default withStyles(styles)(BackToButton);

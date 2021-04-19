// @packages
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const AlertDialog = ({
    buttonTimeboards,
    buttonSchedule,
    classes,
    content,
    id,
    onClose,
    visible,
    title
}) => (
    <Dialog
        BackdropProps={{ className: classes.backdropClassName }}
        classes={{ paper: classes.paper }}
        id={id}
        onClose={onClose}
        open={visible}
    >
        {onClose && (
            <IconButton className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
            </IconButton>
        )}
        <DialogTitle id={`${id}-title`} className={classes.titleHeader}>
            {title}
        </DialogTitle>
        <DialogContent className={classes.container}>
            <DialogContentText id={`${id}-description`} className={classes.adjustText}>
                {content}
            </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.container}>
            <Button onClick={onClose} className={classes.button}>
                {buttonTimeboards}
            </Button>
            <Button onClick={onClose} className={classes.button}>
                {buttonSchedule}
            </Button>
        </DialogActions>
    </Dialog>
);

AlertDialog.propTypes = {
    buttonSchedule: PropTypes.object.isRequired,
    buttonTimeboards: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.object.isRequired,
    visible: PropTypes.func.isRequired
};

AlertDialog.defaultProps = {};

export default withStyles(styles)(AlertDialog);

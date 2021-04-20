// @packages
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import classNames from 'classnames';
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
    actions,
    className,
    classes,
    content,
    id,
    onClose,
    title,
    visible
}) => {
    classNames(classes.buttonLock, className);

    return (

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
            {actions?.map(action => (
                <Button
                    key={id}
                    onClick={onClose}
                    className={classNames(
                        classes.button,
                        action.disable ? classes.buttonLock : null
                    )}
                >
                    {action.name}
                </Button>
            ))}
        </DialogActions>
    </Dialog>
    );
};

AlertDialog.propTypes = {
    actions: PropTypes.object.isRequired,
    className: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
    title: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    visible: PropTypes.func.isRequired

};

AlertDialog.defaultProps = {};

export default withStyles(styles)(AlertDialog);

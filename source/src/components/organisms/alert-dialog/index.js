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
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const AlertDialog = ({
    actions,
    classes,
    content,
    id,
    onClose,
    title,
    visible
}) => (
    <Dialog
        BackdropProps={{ className: classes.backdropClassName }}
        classes={{ paper: classes.paper }}
        id={id}
        onClose={onClose}
        open={visible}
    >
        {onClose && (
            <IconButton className={classes.closeButton} onClick={onClose} id={`${id}-close-modal`}>
                <CloseIcon />
            </IconButton>
        )}
        <DialogTitle id={`${id}-title`} className={classes.titleHeader}>
            {title}
        </DialogTitle>
        <DialogContent className={classes.content}>
            <DialogContentText id={`${id}-description`} className={classes.adjustText}>
                {content}
            </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.bottomActions}>
            {actions.map((action, index) => (
                <Button
                    id={`${id}-actions-${index}`}
                    key={index}
                    onClick={action.onClick}
                    className={classNames(
                        classes.bottom,
                        action.disabled && classes.bottomDisabled
                    )}
                >
                {action.name}
                </Button>
            ))}
        </DialogActions>
    </Dialog>
);

AlertDialog.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
        onClick: PropTypes.func,
        name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        disabled: PropTypes.bool
    })),
    classes: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.object.isRequired,
    visible: PropTypes.func.isRequired
};

AlertDialog.defaultProps = {
    actions: []
};

export default withStyles(styles)(AlertDialog);

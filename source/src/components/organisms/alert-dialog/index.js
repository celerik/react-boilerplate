// @packages
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
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
    colorChange,
    content,
    id,
    isExitButtonVisible,
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
        {isExitButtonVisible && (
            <IconButton className={classes.closeButton} onClick={onClose} id={`${id}-close-modal`}>
                <CloseIcon />
            </IconButton>
        )}
        <DialogTitle id={`${id}-title`} className={classes.titleHeader}>
            {title}
        </DialogTitle>
        <DialogContent className={classes.content}>
            {content}
        </DialogContent>
        <DialogActions className={classes.bottomActions}>
            {actions?.map((action, index) => (
                <Button
                    id={`${id}-action-${id}`}
                    key={index}
                    onClick={action.onClick}
                    className={classNames(
                        classes.bottom,
                        action.disabled && classes.bottomDisabled,
                        action.disabledObservation && classes.bottomDisabledObservation
                    )}
                    style={{
                        backgroundColor: index === 0
                            ? 'transparent'
                            : colorChange,
                        borderColor: colorChange
                    }}
                >
                {action.name}
                </Button>
            ))}
        </DialogActions>
    </Dialog>
);

AlertDialog.propTypes = {
    actions: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    colorChange: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    isExitButtonVisible: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.object.isRequired,
    visible: PropTypes.func.isRequired
};

AlertDialog.defaultProps = {
    colorChange: '#8675FF',
    isExitButtonVisible: true
};

export default withStyles(styles)(AlertDialog);

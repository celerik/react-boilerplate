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

// @scripts
import { config } from '../../../config';

// @styles
import styles from './styles';

const AlertDialog = ({
    classes,
    id,
    onClose,
    visible
}) => (
    <Dialog
        id={id}
        onClose={onClose}
        open={visible}
    >
        {onClose && (
            <IconButton className={classes.closeButton} onClick={onClose}>
                <CloseIcon className={classes.closeButton} />
            </IconButton>
        )}
        <DialogTitle id={`${id}-title`} className={classes.titleHeader}>
            {config.text.dialogLayout.cloneProject}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id={`${id}-description`} className={classes.adjustText}>
                {config.text.dialogLayout.petition}
            </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.acctionContainer}>
            <Button onClick={onClose} className={classes.button}>
                {config.text.dialogLayout.cloneSnapshot}
            </Button>
            <Button onClick={onClose} className={classes.button}>
                {config.text.dialogLayout.cloneServicePattern}
            </Button>
        </DialogActions>
    </Dialog>
);

AlertDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    visible: PropTypes.func.isRequired
};

AlertDialog.defaultProps = {};

export default withStyles(styles)(AlertDialog);

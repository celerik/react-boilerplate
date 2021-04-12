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

const AlertDialog = ({ classes, onClose, visible }) => (
      <Dialog
          open={visible}
          onClose={onClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
      >
       {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon className={classes.closeButton} />
        </IconButton>
       ) : null}
        <DialogTitle id="alert-dialog-title" className={classes.titleHeader}>Clone project</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You can clone a Service Pattern or clone a
            Snapshot of the project. Select one:
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Clone a Snapshot
          </Button>
          <Button onClick={onClose} color="primary" autoFocus>
            Clone a Service Pattern
          </Button>
        </DialogActions>
      </Dialog>
);

AlertDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};

AlertDialog.defaultProps = {};

export default withStyles(styles)(AlertDialog);

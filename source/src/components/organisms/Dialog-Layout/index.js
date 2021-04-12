import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';

const AlertDialog = ({visible, onClose}) => {
  return (
    <div>
      <Dialog
        open={visible}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Clone project"}</DialogTitle>
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
    </div>
  );
}

export default AlertDialog;
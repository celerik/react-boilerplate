// @packages
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '../../atoms/icon-button';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { theme } from '../../../styles/material-ui';
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
            <IconButton
                buttonClassname={classes.closeButton}
                icon="close"
                id={`${id}-close-modal`}
                onClick={onClose}
            />
        )}
        <DialogTitle id={`${id}-title`} className={classes.titleHeader}>
            {title}
        </DialogTitle>
        <DialogContent className={classes.content}>
            {content}
        </DialogContent>
        <DialogActions className={classes.bottomActions}>
            {actions.map((action, index) => (
                <Button
                    id={`${id}-action-${index}`}
                    key={index}
                    onClick={action.onClick}
                    className={classNames(
                        classes.bottom,
                        action.filled && classes.buttonfilled
                    )}
                    style={{
                        backgroundColor: action.filled
                            ? colorChange
                            : 'transparent',
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
    actions: PropTypes.arrayOf(PropTypes.shape({
        onClick: PropTypes.func,
        filled: PropTypes.bool,
        name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
    })),
    classes: PropTypes.object.isRequired,
    colorChange: PropTypes.object,
    content: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    isExitButtonVisible: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.object.isRequired,
    visible: PropTypes.func.isRequired
};

AlertDialog.defaultProps = {
    actions: [],
    colorChange: theme.palette.primary.light,
    isExitButtonVisible: true
};

export default withStyles(styles)(AlertDialog);

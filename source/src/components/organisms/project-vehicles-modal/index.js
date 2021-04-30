// @packages
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @scripts
import Actionbutton from '../../atoms/button';
import ProjectsVehiclesList from '../../molecules/projects-vehicles-list';
import { config } from '../../../config';

// @styles
import styles from './styles';

const text = config.text.projectMenu.projectsVehiclesModal;

const ProjectsVehicles = ({
    classes,
    open,
    onClose
}) => (
    <Dialog
        BackdropProps={{ className: classes.backdropClassName }}
        className={classes.mainContainer}
        disableBackdropClick
        disableEscapeKeyDown
        onClose={onClose}
        open={open}
    >
        <DialogTitle onClose={onClose} className={classes.actionsDialog}>
            <Grid container spacing={12}>
                <Grid item xs={11}>
                    <Typography variant="h3">{text.title}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={onClose} className={classes.backIcon}>
                        <ArrowBackIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </DialogTitle>

        <DialogContent className={classes.contentDialog}>
            <Typography variant="h4">{text.vehiclesTypes}</Typography>
            <ProjectsVehiclesList />
        </DialogContent>

        <DialogActions className={classes.actionsDialog}>
            <Actionbutton
                className={classes.outlineButton}
                endIcon="directions_bus"
                label={text.createVehicleType}
            />
            <Actionbutton
                className={classes.outlineButton}
                endIcon="add"
                label={text.addFromLibrary}
            />
        </DialogActions>
    </Dialog>
);

ProjectsVehicles.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default withStyles(styles)(ProjectsVehicles);
// @packages
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @scripts
import Actionbutton from '../../atoms/button';
import Project from '../../../services/project';
import ProjectsVehiclesList from '../../molecules/projects-vehicles-list';
import { config } from '../../../config';
import { format } from '../../../util';
import { globalUI } from '../../../core';

// @styles
import styles from './styles';

const text = config.text.projectMenu.projectsVehiclesModal;

const ProjectsVehicles = ({
    classes,
    onClose,
    open,
    projectId
}) => {
    const [projectsVehicles, setProjectsVehicles] = useState(null);

    useEffect(async () => {
        setProjectsVehicles(await Project.getVehicles(projectId));
    }, []);

    const handleClickCreateVehicleType = () => {
        globalUI.showAlertNotificationSuccess(text.vehicleTypeCreatedSuccessfully,
            text.youCantFind);
    };

    return (
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
                <Typography variant="h4">{format(text.vehiclesTypes, projectsVehicles?.length || 0)}</Typography>
                <ProjectsVehiclesList projectsList={projectsVehicles} />
            </DialogContent>

            <DialogActions className={classes.actionsDialog}>
                <Actionbutton
                    className={classes.outlineButton}
                    endIcon="directions_bus"
                    label={text.createVehicleType}
                    onClick={handleClickCreateVehicleType}
                />
                <Actionbutton
                    className={classes.outlineButton}
                    endIcon="add"
                    label={text.addFromLibrary}
                />
            </DialogActions>
        </Dialog>
    );
};

ProjectsVehicles.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    projectId: PropTypes.string.isRequired
};

export default withStyles(styles)(ProjectsVehicles);

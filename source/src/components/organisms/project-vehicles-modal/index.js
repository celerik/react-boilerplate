// @packages
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
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

const ProjectsVehicles = ({ classes, open, setOpen }) => (
    <Dialog
        BackdropProps={{ timeout: 500 }}
        classes={{ paper: classes.dialogPaper }}
        onClose={() => setOpen(false)}
        open={open}
    >
        <DialogTitle onClose={() => setOpen(false)}>
            <Typography variant="h3">{text.title}</Typography>
        </DialogTitle>

        <DialogContent>
            <Typography>{text.vehiclesTypes}</Typography>
            <div>
                <ProjectsVehiclesList />
            </div>
        </DialogContent>

        <DialogActions className={classes.actionsDialog}>
            <Actionbutton
                className={classes.outlineButton}
                endIcon={<DirectionsBusIcon />}
                label={text.createVehicleType}
            />

            <Actionbutton
                className={classes.outlineButton}
                endIcon={<AddIcon />}
                label={text.addFromLibrary}
            />

        </DialogActions>

    </Dialog>
);

ProjectsVehicles.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
};

export default withStyles(styles)(ProjectsVehicles);

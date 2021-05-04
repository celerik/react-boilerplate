// @packages
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Inputfield from '../../molecules/input-field';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

// @scripts
import Actionbutton from '../../atoms/button';
import Attribute from '../../molecules/project-attribute';
import infoMock from '../project-settings/settingsProject.json';
import { config } from '../../../config';

// @styles
import styles from './styles';

const text = config.text.projectMenu.projectsVehiclesModal;

const ProjectsVehiclesType = ({
    classes,
    id,
    onClick,
    onClose,
    open
}) => {
    const largeInput = classNames(classes.inputfield, classes.inputLarge);
    const [infoProject, setInfoProject] = useState(infoMock);

    const handleSettings = (value, property) => {
        infoProject[property] = value;
        setInfoProject({ ...infoProject });
    };

    const secondAttributes = [
        {
            nameProperty: config.text.projectMenu.projectSettingsModal.defaultVehicleDepreciation,
            content: [
                <Inputfield
                    className={largeInput}
                    endAdornment={config.text.projectMenu.projectSettingsModal.day}
                    id={`${id}-default-vehicle-depreciation-input`}
                    key="input-5"
                    onChange={(e) => handleSettings(e, 'defaultVehicleDepreciation')}
                    rootClass={classes.input}
                    startAdornment="£"
                    type="number"
                />
            ]
        },
        {
            nameProperty: config.text.projectMenu.projectSettingsModal.defaultVechicleOperating,
            secondarytext: config.text.projectMenu.projectSettingsModal.running,
            content: [
                <Inputfield
                    className={largeInput}
                    endAdornment={config.text.projectMenu.projectSettingsModal.day}
                    id={`${id}-default-vehicle-operating-running-input`}
                    key="input-6"
                    onChange={(e) => handleSettings(e, 'defaultOperatingCostWhileRunning')}
                    rootClass={classes.input}
                    startAdornment="£"
                    type="number"
                />
            ]
        },
        {
            nameProperty: 'Default vehicle operating cost',
            secondarytext: config.text.projectMenu.projectSettingsModal.resting,
            content: [
                <Inputfield
                    className={largeInput}
                    endAdornment={config.text.projectMenu.projectSettingsModal.day}
                    id={`${id}-default-vehicle-operating-resting-input`}
                    key="input-7"
                    onChange={(e) => handleSettings(e, 'defaultOperatingCostWhileResting')}
                    rootClass={classes.input}
                    startAdornment="£"
                    type="number"
                />
            ]
        }
    ];

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
                        <Typography variant="h3">{text.header}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton onClick={onClose} className={classes.backIcon} />
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent className={classes.contentDialog}>
                <Typography variant="h4">{text.features}</Typography>
                <Typography
                    className={classes.subTitle}
                    variant="h4"
                >
                        {text.subtitle}
                </Typography>
                <Inputfield
                    className={classes.nameProject}
                    id={`${id}-name-project-input`}
                    onChange={Function.prototype}
                    underline
                    value={text.input}
                    variant="standard"
                />
                {secondAttributes.map((value, index) => (
                        <Attribute
                            attribute={value.nameProperty}
                            id={`${id}-attribute-${index}-2`}
                            key={index}
                            secondarytext={value.secondarytext}
                        >
                            {value.content}
                        </Attribute>
                ))}
                <Actionbutton
                    className={classes.vehicleFeature}
                    endIcon="add"
                    label={text.vehicleFeature}
                    onClick={onClick}
                />
            </DialogContent>
            <DialogActions className={classes.actionsDialog}>
                <Actionbutton
                    className={classes.outlineButton}
                    endIcon="save"
                    label={text.saveFeatures}
                    onClick={onClick}
                />
                <Actionbutton
                    className={classes.outlineButtonWhite}
                    label={text.cancel}
                    onClick={onClose}
                />
            </DialogActions>
        </Dialog>
    );
};

ProjectsVehiclesType.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
};

export default withStyles(styles)(ProjectsVehiclesType);

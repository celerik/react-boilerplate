// @packages
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Inputfield from '../../molecules/input-field';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

// @scripts
import Attribute from '../../molecules/project-attribute';
import ButtonAction from '../../atoms/button';
import infoMock from './settingsProject.json';
import project from '../../../services/projects';
import { config } from '../../../config';

// @styles
import styles from './styles';

const ProjectSettings = ({
    classes,
    id,
    onClose,
    open,
    projectId
}) => {
    const inputMedium = classNames(classes.inputfield, classes.inputMedium);
    const inputSmall = classNames(classes.inputfield, classes.inputSmall);
    const largeInput = classNames(classes.inputfield, classes.inputLarge);
    const [infoProject, setInfoProject] = useState(infoMock);

    useEffect(async () => {
        if (open) {
            const result = await project.getProjectSettings(projectId);
            const settings = Object.assign({ ...infoProject }, result);
            setInfoProject(settings);
        }
    }, [open]);

    const handleSettings = (value, property) => {
        infoProject[property] = value;
        setInfoProject({ ...infoProject });
    };

    const handleOtpWindow = (value, index) => {
        infoProject.otpWindow[index] = value;
        setInfoProject({ ...infoProject });
    };

    const onSubmit = async () => {
        await project.putProjectSettings(projectId, infoProject);
    };

    const firstAttributes = [
        {
            nameProperty: config.text.projectMenu.projectSettingsModal.defaultOtpLevel,
            content: [
                <Inputfield
                    className={inputSmall}
                    endAdornment="%"
                    id={`${id}-default-top-input`}
                    key="input-0"
                    onChange={(e) => handleSettings(e, 'targetOTP')}
                    rootClass={classes.input}
                    type="number"
                    value={infoProject.targetOTP}
                />
            ]
        },
        {
            nameProperty: config.text.projectMenu.projectSettingsModal.defaultOtpThresholds,
            content: [
                <Inputfield
                    className={inputMedium}
                    endAdornment={config.text.projectMenu.projectSettingsModal.secs}
                    id={`${id}-default-otp-thresholds-input-1`}
                    key="input-1"
                    onChange={(e) => handleOtpWindow(e, 0)}
                    rootClass={classes.input}
                    type="number"
                    value={infoProject.otpWindow[0]}
                />,
                <Inputfield
                    className={inputMedium}
                    endAdornment={config.text.projectMenu.projectSettingsModal.secs}
                    id={`${id}-default-otp-thresholds-input-2`}
                    key="input-2"
                    onChange={(e) => handleOtpWindow(e, 1)}
                    rootClass={classes.input}
                    type="number"
                    value={infoProject.otpWindow[1]}
                />
            ]
        },
        {
            nameProperty: config.text.projectMenu.projectSettingsModal.defaultRecoveryLevel,
            content: [
                <Inputfield
                    className={inputSmall}
                    endAdornment="%"
                    id={`${id}-default-recovery-level-input`}
                    key="input-3"
                    onChange={(e) => handleSettings(e, 'recoveryTargetLevel')}
                    rootClass={classes.input}
                    type="number"
                    value={infoProject.recoveryTargetLevel}
                />
            ]
        },
        {
            nameProperty: config.text.projectMenu.projectSettingsModal.defaultRliefTime,
            content: [
                <Inputfield
                    className={inputMedium}
                    endAdornment={config.text.projectMenu.projectSettingsModal.secs}
                    id={`${id}-default-rlief-time-input`}
                    key="input-4"
                    onChange={(e) => handleSettings(e, 'reliefTime')}
                    rootClass={classes.input}
                    type="number"
                    value={infoProject.reliefTime}
                />
            ]
        }
    ];

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
                    value={infoProject.defaultVehicleDepreciation}
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
                    value={infoProject.defaultOperatingCostWhileRunning}
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
                    value={infoProject.defaultOperatingCostWhileResting}
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
            id={id}
            open={open}
        >
                <DialogTitle className={classes.actions}>
                    <Typography variant="h3">
                        {config.text.projectMenu.projectSettingsModal.projectSettings}
                    </Typography>
                </DialogTitle>
                <DialogContent className={classes.content}>
                    <Typography
                        variant="body2"
                        className={classes.text}
                    >
                        {config.text.projectMenu.projectSettingsModal.info}
                    </Typography>
                    <Inputfield
                        className={classes.nameProject}
                        id={`${id}-name-project-input`}
                        onChange={Function.prototype}
                        underline
                        value="Project name"
                        variant="standard"
                    />
                    <Typography
                        variant="h4"
                        className={classes.subTitle}
                    >
                        {config.text.projectMenu.projectSettingsModal.projectSettings}
                    </Typography>
                    {firstAttributes.map((value, index) => (
                        <Attribute
                            attribute={value.nameProperty}
                            key={index}
                            id={`${id}-attribute-${index}-1`}
                            secondarytext={value.secondarytext}
                        >
                            {value.content}
                        </Attribute>
                    ))}
                    <Typography
                        className={classes.subTitle}
                        variant="h4"
                    >
                        {config.text.projectMenu.projectSettingsModal.defaultVehicleCost}
                    </Typography>
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
                </DialogContent>
                <DialogActions className={classes.actions}>
                    <ButtonAction
                        className={classes.save}
                        endIcon="save"
                        id={`${id}-confirm`}
                        label={config.text.projectMenu.projectSettingsModal.saveSettings}
                        onClick={onSubmit}
                    />
                    <ButtonAction
                        className={classes.cancel}
                        id={`${id}-cancel`}
                        label={config.text.projectMenu.projectSettingsModal.cancel}
                        onClick={onClose}
                    />
                </DialogActions>
        </Dialog>
    );
};

ProjectSettings.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    projectId: PropTypes.string.isRequired
};

ProjectSettings.defaultProps = {};

export default withStyles(styles)(ProjectSettings);

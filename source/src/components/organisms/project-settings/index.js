// @packages
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Inputfield from '../../molecules/input-field';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

// @scripts
import Attribute from '../../molecules/attribute';
import ButtonAction from '../../atoms/button';
import { config } from '../../../config';

// @styles
import styles from './styles';

const ProjectSettings = ({
    classes,
    open,
    id
}) => {
    const inputMedium = classNames(classes.inputfield, classes.inputMedium);
    const inputSmall = classNames(classes.inputfield, classes.inputSmall);
    const largeInput = classNames(classes.inputfield, classes.inputLarge);

    const firstAttributes = [
        {
            nameProperty: config.text.projectMenu.projetcSettingsModal.defaultTopLevel,
            content: [
                <Inputfield
                    key="input-0"
                    className={inputSmall}
                    rootClass={classes.input}
                    endAdornment="%"
                    value="10"
                />
            ]
        },
        {
            nameProperty: config.text.projectMenu.projetcSettingsModal.defaultOtpThresholds,
            content: [
                <Inputfield
                    key="input-1"
                    className={inputMedium}
                    rootClass={classes.input}
                    value="10"
                    endAdornment={config.text.projectMenu.projetcSettingsModal.secs}
                />,
                <Inputfield
                    key="input-2"
                    className={inputMedium}
                    rootClass={classes.input}
                    value="10"
                    endAdornment={config.text.projectMenu.projetcSettingsModal.secs}
                />
            ]
        },
        {
            nameProperty: config.text.projectMenu.projetcSettingsModal.defaultRecoveryLevel,
            content: [
                <Inputfield
                    key="input-3"
                    className={inputSmall}
                    rootClass={classes.input}
                    endAdornment="%"
                    value="10"
                />
            ]
        },
        {
            nameProperty: config.text.projectMenu.projetcSettingsModal.defaultRliefTime,
            content: [
                <Inputfield
                    key="input-4"
                    className={inputMedium}
                    rootClass={classes.input}
                    value="10"
                    endAdornment={config.text.projectMenu.projetcSettingsModal.secs}
                />
            ]
        }
    ];

    const secondAttributes = [
        {
            nameProperty: config.text.projectMenu.projetcSettingsModal.defaultVechicleOperating,
            content: [
                <Inputfield
                    key="input-5"
                    className={largeInput}
                    value="10"
                    rootClass={classes.input}
                    endAdornment={config.text.projectMenu.projetcSettingsModal.day}
                    startAdornment="£"
                />
            ]
        },
        {
            nameProperty: config.text.projectMenu.projetcSettingsModal.defaultVechicleOperating,
            secondarytext: config.text.projectMenu.projetcSettingsModal.running,
            content: [
                <Inputfield
                    key="input-6"
                    className={largeInput}
                    value="10"
                    rootClass={classes.input}
                    endAdornment={config.text.projectMenu.projetcSettingsModal.day}
                    startAdornment="£"
                />
            ]
        },
        {
            nameProperty: 'Default vehicle operating cost',
            secondarytext: config.text.projectMenu.projetcSettingsModal.resting,
            content: [
                <Inputfield
                    key="input-7"
                    className={largeInput}
                    value="10"
                    rootClass={classes.input}
                    endAdornment={config.text.projectMenu.projetcSettingsModal.day}
                    startAdornment="£"
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
            onClose={Function.prototype}
            open={true}
        >
                <DialogTitle className={classes.actions}>
                    <Typography variant="h3">
                        {config.text.projectMenu.projetcSettingsModal.projectSettings}
                    </Typography>
                </DialogTitle>
                <DialogContent className={classes.content}>
                    <Typography
                        variant="body2"
                        className={classes.text}
                    >
                        {config.text.projectMenu.projetcSettingsModal.info}
                    </Typography>
                    <Inputfield
                        className={classes.nameProject}
                        underline
                        value="Project name"
                        variant="standard"
                    />
                    <Typography
                        variant="h4"
                        className={classes.subTitle}
                    >
                        {config.text.projectMenu.projetcSettingsModal.projectSettings}
                    </Typography>
                    {firstAttributes.map((value, index) => (
                        <Attribute
                            attribute={value.nameProperty}
                            key={index}
                            secondarytext={value.secondarytext}
                        >
                            {value.content}
                        </Attribute>
                    ))}
                    <Typography
                        className={classes.subTitle}
                        variant="h4"
                    >
                        {config.text.projectMenu.projetcSettingsModal.defaultVehicleCost}
                    </Typography>
                    {secondAttributes.map((value, index) => (
                        <Attribute
                            attribute={value.nameProperty}
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
                        label={config.text.projectMenu.projetcSettingsModal.saveSettings}
                        onClick={Function.prototype}
                    />
                    <ButtonAction
                        className={classes.cancel}
                        id={`${id}-cancel`}
                        label={config.text.projectMenu.projetcSettingsModal.cancel}
                        onClick={Function.prototype}
                    />
                </DialogActions>
        </Dialog>
    );
};

ProjectSettings.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired
};

ProjectSettings.defaultProps = {};

export default withStyles(styles)(ProjectSettings);

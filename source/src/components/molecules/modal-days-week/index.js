// @packages
import CheckBox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Stop from '@material-ui/icons/Stop';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @scripts
import ButtonAction from '../../atoms/button';
import { config } from '../../../config';

// @styles
import styles from './styles';

const ModalDaysWeek = ({
    classes,
    days,
    id,
    onClose,
    onConfirm,
    open
}) => {
    const [daysChecked, setDaysChecked] = useState([...days]);

    const handleCheckBoxes = (day) => {
        if (daysChecked.includes(day)) {
            setDaysChecked(daysChecked.filter(e => e !== day));
        } else {
            setDaysChecked([...daysChecked, day]);
        }
    };

    const onClickSuscribe = () => {
        onConfirm(daysChecked);
    };

    return (
        <div>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={open}
                onClose={onClose}
                BackdropProps={{ className: classes.backDrop }}
            >
                <DialogTitle className={classes.actions}>
                    <Typography variant="h3">
                        {config.text.servicePatternsMenu.daysOfWeek}
                    </Typography>
                </DialogTitle>
                <DialogContent className={classes.content}>
                    {config.masterData.daysOfWeek.map((dayValue, index) => (
                        <div className={classes.checkContainer} key={index}>
                            <CheckBox
                                defaultChecked={days.includes(dayValue)}
                                checkedIcon={<Stop fontSize="medium" className={classes.checkboxSelect} />}
                                color="primary"
                                id={`${id}-checkbox-day`}
                                icon={<CheckBoxOutlineBlankIcon className={classes.checkboxUnSelect} />}
                                onChange={() => handleCheckBoxes(dayValue)}
                            />
                            <Typography>{config.text.servicePatternsMenu.days[dayValue]}</Typography>
                        </div>
                    ))}
                </DialogContent>
                <DialogActions className={classes.actions}>
                    <ButtonAction
                        className={classes.cancel}
                        id={`${id}-cancel`}
                        label={config.text.servicePatternsMenu.cancel}
                        onClick={onClose}
                    />
                    <ButtonAction
                        className={classes.suscribe}
                        id={`${id}-confirm`}
                        label={config.text.servicePatternsMenu.confirm}
                        onClick={onClickSuscribe}
                    />
                </DialogActions>
            </Dialog>
        </div>
    );
};

ModalDaysWeek.propTypes = {
    classes: PropTypes.object.isRequired,
    days: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
};

ModalDaysWeek.defaultProps = {};

export default withStyles(styles)(ModalDaysWeek);

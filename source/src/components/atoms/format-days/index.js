// @packages
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import React from 'react';
import Typography from '@material-ui/core/Typography';

// @scripts
import { config } from '../../../config';

// @styles
import styles from './styles';

const FormatDaysOperation = ({
    classes,
    days,
    id,
    variant
}) => {
    const createDays = (...strings) => (
        <>
            {strings[1]}
            <strong>{strings[2]}</strong>
            {strings[3]}
            <strong>{strings[4]}</strong>
        </>
    );
    const [str1, str2] = config.text.servicePatternsMenu.runDays.split('{0}');
    const allDaysExceptLast = [...days];
    const lastDay = allDaysExceptLast.pop();
    const strDays = allDaysExceptLast.join(', ').replace(/, $/, '');

    return (
        <Typography
            className={classes.container}
            id={id}
            variant={variant}
        >
            {createDays`${str1} ${strDays} ${str2} ${lastDay}`}
        </Typography>
    );
};

FormatDaysOperation.propTypes = {
    classes: PropTypes.object.isRequired,
    days: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired,
    variant: PropTypes.string
};

FormatDaysOperation.defaultProps = {
    variant: 'h6'
};

export default withStyles(styles)(FormatDaysOperation);

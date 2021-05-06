// @packages
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @scripts
import { config } from '../../../config';

// @styles
import styles from './styles';
import classNames from 'classnames';

const FormatDaysOperation = ({
    className,
    classes,
    days,
    id,
    variant
}) => {
    const mainClassName = classNames(className, classes);
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
            className={mainClassName}
            id={id}
            variant={variant}
        >
            {createDays`${str1} ${strDays} ${str2} ${lastDay}`}
        </Typography>
    );
};

FormatDaysOperation.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    days: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired,
    variant: PropTypes.string
};

FormatDaysOperation.defaultProps = {
    className: null,
    variant: 'h6'
};

export default withStyles(styles)(FormatDaysOperation);

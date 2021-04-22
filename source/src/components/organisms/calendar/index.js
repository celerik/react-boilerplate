// @packages
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const Calendario = ({
    classes,
    id
}) => {
    const [value, onChange] = useState(new Date());
    return (
        <div className={classes.calendar} id={id}>
            <Calendar onChange={onChange} selectRange value={value} />
        </div>
    );
};

Calendario.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};

Calendario.defaultProps = {};

export default withStyles(styles)(Calendario);

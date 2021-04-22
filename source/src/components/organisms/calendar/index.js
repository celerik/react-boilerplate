// @packages
import PropTypes from 'prop-types';
import ReactCalendar from 'react-calendar';
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';
import './custom-styles.css';

// @styles
import styles from './styles';

const Calendar = ({
    classes,
    id
}) => {
    const [value, onChange] = useState(new Date());
    return (
        <div className="calendar" id={id}>
            <ReactCalendar
                onChange={onChange}
                selectRange
                value={value}
            />
        </div>
    );
};

Calendar.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};

Calendar.defaultProps = {};

export default withStyles(styles)(Calendar);

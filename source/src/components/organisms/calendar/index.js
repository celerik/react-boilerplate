// @packages
import PropTypes from 'prop-types';
import ReactCalendar from 'react-calendar';
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const Calendar = ({
    classes,
    id
}) => {
    const [value, onChange] = useState(new Date());

    return (
        <div className={classes.calendar} id={id}>
            <ReactCalendar
                prev2AriaLabel={null}
                prev2Label={null}
                prevLabel={<div>hola pa' atrás</div>}
                nextLabel={<div>hola pa' adelante</div>}
                next2Label={null}
                navigationLabel={({ date }) => (
                    <div>
                        AQUÍ VA LA FECHA{date.toString}
                    </div>
                )}
                minDetail="month"
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

// @packages
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import moment from 'moment';
import { withStyles } from '@material-ui/core';

// @scripts
import { ReactComponent as ArrowIcon } from './arrow-icon.svg';

// @styles
import styles from './styles';

const Calendar = ({
    classes,
    id
}) => {
    const [selectedDates, onChange] = useState([new Date(), new Date()]);

    return (
        <div className={classes.calendar} id={id}>
            <ReactCalendar
                calendarType="US"
                navigationLabel={({ date }) => (
                    <div>{moment(date).format('MMMM')}</div>
                )}
                tileContent={({ 
                    date,
                    view
                }) => view === 'month' && (
                    <span className={classes.rangeSpan}>
                        {date.getDay()}
                    </span> 
                )}
                next2Label={null}
                formatMonth={(_, date) => (
                    <div>{moment(date).format('MMM')}</div>
                )}
                nextLabel={<ArrowIcon />}
                prev2AriaLabel={null}
                prev2Label={null}
                prevLabel={<ArrowIcon />}
                minDetail="year"
                onChange={onChange}
                selectRange
                value={selectedDates}
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

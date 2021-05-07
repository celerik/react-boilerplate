// @packages
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import classNames from 'classnames';
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
    const [outLineBorder, setOutLineBorder] = useState();

    const datesAreOnSameDay = (first, second) => {
        return first.getFullYear() === second.getFullYear() &&
            first.getMonth() === second.getMonth() &&
            first.getDate() === second.getDate();
    }

    const onChangeDate = (data) => {
        if (datesAreOnSameDay(data[0], data[1])) {
            setOutLineBorder(classes.outLineBorder);
        } else {
            setOutLineBorder({});
        }
        onChange(data);
    };

    return (
        <div className={classNames(classes.calendar, outLineBorder)} id={id}>
            <ReactCalendar
                calendarType="US"
                navigationLabel={({ date, view }) => (
                    <div>
                        {moment(date).format(view === 'month' ? 'MMMM' : 'YYYY')}
                    </div>
                )}
                tileContent={({
                    date,
                    view
                }) => view === 'month' && (
                    <span className={classes.rangeSpan}>
                        {date.getDate()}
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
                onChange={onChangeDate}
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

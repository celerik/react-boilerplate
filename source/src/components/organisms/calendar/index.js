// @packages
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import classNames from 'classnames';
import moment from 'moment';
import { withStyles } from '@material-ui/core';

// @scripts
import { ReactComponent as ArrowIcon } from './arrow-icon.svg';
import { datesAreOnSameDay } from '../../../util/date';

// @styles
import styles from './styles';

const Calendar = ({
    classes,
    id,
    onChange,
    selectedDates
}) => {
    const [outLineBorder, setOutLineBorder] = useState();
    const maxDate = new Date(new Date().getFullYear(), 11, 31);

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
                navigationLabel={({ date, view, label }) => (
                    <>
                        {view === 'month'
                            ? moment(date).format(view === 'month' ? 'MMMM' : 'YYYY')
                            : label}
                    </>
                )}
                tileContent={({ date, view }) => view === 'month' && (
                    <span className={classes.rangeSpan}>
                        {date.getDate()}
                    </span>
                )}
                next2Label={null}
                formatMonth={(_, date) => (
                    <>{moment(date).format('MMM')}</>
                )}
                maxDate={maxDate}
                minDetail="decade"
                nextLabel={<ArrowIcon />}
                onChange={onChangeDate}
                prev2AriaLabel={null}
                prev2Label={null}
                prevLabel={<ArrowIcon />}
                selectRange
                value={selectedDates}
            />
        </div>
    );
};

Calendar.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    selectedDates: PropTypes.arrayOf(PropTypes.string).isRequired
};

Calendar.defaultProps = {};

export default withStyles(styles)(Calendar);

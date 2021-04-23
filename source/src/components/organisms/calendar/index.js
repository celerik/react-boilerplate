// @packages
import PropTypes from 'prop-types';
import ReactCalendar from 'react-calendar';
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';
import moment from 'moment';
// @styles
import styles from './styles';
import { ReactComponent as Image } from './image.svg';

const Calendar = ({
    classes,
    id
}) => {
    const [value, onChange] = useState(new Date());

    return (
        <div className={classes.calendar} id={id}>
            <ReactCalendar
                calendarType="US"
                navigationLabel={() => (
                    <div>
                       {moment().format('MMMM')}
                    </div>
                )}
                next2Label={null}
                nextLabel={<Image />}
                prev2AriaLabel={null}
                prev2Label={null}
                prevLabel={<Image />}
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

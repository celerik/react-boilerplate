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
                nextLabel={<ArrowIcon />}
                prev2AriaLabel={null}
                prev2Label={null}
                prevLabel={<ArrowIcon />}
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

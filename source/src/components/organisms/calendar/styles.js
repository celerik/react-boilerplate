const buttonStyle = {
    backgroundColor: 'transparent'
};

const rangeLimitsStyles = {
    backgroundColor: 'red'
};

export default theme => ({
    calendar: {
        height: 297,
        width: 304,
        backgroundColor: 'white',
        boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)',
        '& .react-calendar__navigation__arrow': buttonStyle,
        '& .react-calendar__tile': {
            // STYLES FOR THE DAYS CELLS
            backgroundColor: 'transparent',
            borderWidth: 0,
            height: 32,
            width: 32
        },

        '& .react-calendar__tile--range': {
            backgroundColor: 'yellow'
        },

        '& .react-calendar__tile--rangeStart': rangeLimitsStyles,
        '& .react-calendar__tile--rangeEnd': rangeLimitsStyles,
        '& .react-calendar__month-view__days__day--neighboringMonth': {
            // STYLES FOR DAYS THAT DOESN'T BELONG TO THE ACTUAL MONTH
            color: 'red'
        },

        '& .otra-clase': {
            // CHANGE STYLES FOR SOMETHING ELSE
        }

    }
});

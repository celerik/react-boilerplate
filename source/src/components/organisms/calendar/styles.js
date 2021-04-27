export default theme => ({
    calendar: {
        backgroundColor: 'white',
        boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)',
        padding: '0 20px',
        width: 304,
        '& .react-calendar__month-view__days__day--neighboringMonth': {
            color: theme.palette.text.secondary
        },
        '& div .react-calendar__month-view__weekdays__weekday abbr': {
            color: 'black',
            textDecoration: 'none'
        },
        '& .react-calendar__navigation__label': {
            backgroundColor: 'transparent',
            borderWidth: 0,
            flexGrow: 1,
            marginTop: 16
        },
        '& .react-calendar__navigation__label__labelText': {
            color: 'black',
            fontFamily: 'Poppins',
            fontSize: 16,
            fontWeight: 500,
            textAlign: 'center',
            width: 88
        },
        '& .react-calendar__navigation__arrow': {
            backgroundColor: 'transparent',
            borderColor: 'transparent'
        },
        '& .react-calendar__navigation__next-button': {
            marginTop: 12,
            position: 'relative'
        },
        '& .react-calendar__navigation__prev-button': {
            marginTop: 12,
            position: 'relative',
            transform: 'rotate(180deg)'
        },
        '& .react-calendar__month-view__weekdays': {
            backgroundColor: 'transparent',
            color: 'black',
            fontFamily: 'Poppins',
            fontSize: 12,
            fontWeight: 300,
            marginBottom: 19,
            marginTop: 16,
            textAlign: 'center',
            textDecoration: 'none',
            textTransform: 'capitalize'
        },
        '& .react-calendar__month-view': {
            color: 'white',
            textDecoration: 'none'
        },
        '& .react-calendar__tile': {
            backgroundColor: 'transparent',
            borderWidth: 0,
            fontFamily: 'Poppins',
            fontSize: 14,
            fontStyle: 'normal',
            height: 36,
            cursor: 'pointer',
            textAlign: 'center'
        },
        '& .react-calendar__tile--rangeEnd': {
            background: theme.palette.primary.warn,
            border: `1px solid ${theme.palette.primary.warn}`,
            borderRadius: 100,
            color: 'white'
        },
        '& .react-calendar__tile--range': {
            background: theme.palette.primary.warn
        },
        '& .react-calendar__tile--rangeStart': {
            background: theme.palette.primary.warn,
            border: `1px solid ${theme.palette.primary.warn}`,
            borderRadius: 100,
            color: 'white'
        }
    }
});

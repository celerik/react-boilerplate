export default theme => ({
    calendar: {
        backgroundColor: 'white',
        boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)',
        height: 'fit-content',
        left: '122.5px',
        padding: '0 20px',
        position: 'static',
        top: '117px',
        width: 304,
        '& .react-calendar__month-view__days__day--neighboringMonth': {
            color: '#383C44'
        },
        '& div .react-calendar__month-view__weekdays__weekday abbr': {
            color: 'black',
            textDecoration: 'none'
        },
        '& .react-calendar__navigation__label': {
            backgroundColor: 'transparent',
            borderWidth: '0px',
            flexGrow: 1,
            marginTop: 16
        },
        '& .react-calendar__navigation__label__labelText': {
            color: 'black',
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 500,
            height: 24,
            letterSpacing: '0em',
            lineHeight: '22px',
            textAlign: 'center',
            width: 88
        },
        '& .react-calendar__navigation__arrow': {
            backgroundColor: 'transparent',
            borderColor: 'transparent'
        },
        '& .react-calendar__navigation__next-button': {
            marginLeft: '235px',
            marginTop: '12px',
            position: 'absolute'
        },
        '& .react-calendar__navigation__prev-button': {
            marginRight: '250px',
            marginTop: '12px',
            position: 'absolute',
            transform: 'rotate(180deg)'
        },
        '& .react-calendar__month-view__weekdays': {
            backgroundColor: 'transparent',
            color: 'black',
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 300,
            lineHeight: '120%',
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
            border: '1px solid #FDB561',
            borderWidth: 0,
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            height: 36,
            letterSpacing: '0em',
            lineHeight: '20px',
            pointer: 'cursor',
            textAlign: 'center'
        },
        '& .react-calendar__tile--rangeEnd': {
            background: theme.palette.primary.warn,
            border: '1px solid #FDB561',
            borderRadius: '100px',
            color: 'white'
        },
        '& .react-calendar__tile--range': {
            background: theme.palette.primary.warn
        },
        '& .react-calendar__tile--rangeStart': {
            background: theme.palette.primary.warn,
            border: '1px solid #FDB561',
            borderRadius: '100px',
            color: 'white'
        }
    }
});

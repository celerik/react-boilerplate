const buttonStyle = {
    backgroundColor: 'transparent'
};

const rangeLimitsStyles = {
    backgroundColor: 'red'
};

export default theme => ({
    calendar: {
        height: 'fit-content',
        width: 304,
        backgroundColor: 'white',
        padding: '0 20px',
        boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)',
        position: 'static',
        left: '122.5px',
        top: '117px',
        marginBottom: 16,
        '& .react-calendar__navigation__arrow': buttonStyle,
        '& .react-calendar__tile': {
            // STYLES FOR THE DAYS CELLS
            backgroundColor: 'transparent',
            borderWidth: 0,
            height: 36,
            border: '1px solid #FDB561',
            //styleName: Body;
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '20px',
            letterSpacing: '0em',
            textAlign: 'center'

        },
        contenedor:{
            fontWeight: '100',
            fontSize: '400px',
            fontFamily: 'auto',
            fontWeight: 1000
        },
        '& div .react-calendar__month-view__weekdays__weekday abbr': {
            // DIAS DE LA SEMANA
            textDecoration: 'none',
            color: 'red'
        },
        '& .react-calendar__tile--range': {
            background: "transparent",
        },
        '& .react-calendar__tile--rangeStart':{
            //styleName: Body;
            borderRadius: '100px',
            background: '#FDB561',
            border: '1px solid #FDB561',
            color: "white"
        },
        '& .react-calendar__tile--rangeEnd': {
            borderRadius: '100px',
            background: '#FDB561',
            border: '1px solid #FDB561',
            color: 'white'
        },
        '& .react-calendar__month-view__days__day--neighboringMonth': {
            // STYLES FOR DAYS THAT DOESN'T BELONG TO THE ACTUAL MONTH
            color: '#383C44',

        },

        '& .react-calendar__navigation__label__labelText': {
            //styleName: Body/Big Body Bold;
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '22px',
            letterSpacing: '0em',
            textAlign: 'center',
            color: 'black',
            width:88,
            height: 24
        },
        '& .react-calendar__navigation__label': {
            flexGrow: 1,
            backgroundColor: 'transparent',
            borderWidth: '0px',
            marginTop: 16
        },
        '& .react-calendar__navigation__arrow': {
            backgroundColor: 'transparent',
            borderColor: 'transparent'
        },
        "& .react-calendar__month-view__weekdays": {
            backgroundColor: 'transparent',
            textTransform: 'capitalize',
            textDecoration: 'none',
            marginTop: 16,
            color: 'black',
            marginBottom: 19,
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: '12px',
            lineHeight: '120%',
            textAlign: 'center',

        },
        '& .react-calendar__month-view':{
            color: 'white',
            textDecoration: 'none',
        },
        '& .body':{
            color: "white"
        }
    }
});

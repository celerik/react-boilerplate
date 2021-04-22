export default theme => Object.assign({}, {
    calendar: {
        '&.react-calendar': {
            width: 350,
            maxWidth: '100%',
            background: 'white',
            border: '1px solid #a0a096',
            fontFamily: 'Arial, Helvetica, sans-serif',
            lineHeight: '1.125em'
        },
        '&.react-calendar--doubleView': {
            width: 700
        },
        '&.react-calendar--doubleView .react-calendar__viewContainer': {
            display: 'flex',
            margin: '-0.5em'
        },
        '&.react-calendar--doubleView .react-calendar__viewContainer > *': {
            width: '50%',
            margin: '0.5em'
        },
        '&.react-calendar,.react-calendar *,.react-calendar *:before, .react-calendar *:after': {
            boxSizing: 'border-box',
            webkitBoxSizing: 'border-box',
            boxSizing: 'border-box'
        },
        '&.react-calendar button': {
            margin: 0,
            border: 0,
            outline: 'none'
        },
        '&.react-calendar button:enabled:hover': {
            cursor: 'pointer'
        },
        '&.react-calendar__navigation': {
            height: 44,
            marginBottom: '1em'
        },
        '&.react-calendar__navigation button': {
            minWidth: '44px',
            background: 'none'
        },
        '&.react-calendar__navigation button:enabled:hover,.react-calendar__navigation button:enabled:focus': {
            backgroundColor: '#e6e6e6'
        },
        '&.react-calendar__navigation button[disabled]': {
            backgroundColor: '#f0f0f0'
        },
        '&.react-calendar__month-view__weekdays': {
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '0.75em'
        },
        '&.react-calendar__month-view__weekdays__weekday': {
            padding: '0.5em'
        },
        '&.react-calendar__month-view__weekNumbers': {
            fontWeight: 'bold'
        },
        '&.react-calendar__month-view__weekNumbers .react-calendar__tile': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.75em',
            padding: 'calc(0.75em / 0.75) calc(0.5em / 0.75)'
        },
        '&.react-calendar__month-view__days__day--weekend': {
            color: '#d10000'
        },
        '&.react-calendar__month-view__days__day--neighboringMonth': {
            color: '#757575'
        },
        '&.react-calendar__year-view .react-calendar__tile,.react-calendar__decade-view .react-calendar__tile,.react-calendar__century-view .react-calendar__tile': {
            padding: '2em 0.5em'
        },
        '&.react-calendar__tile': {
            maxWidth: '100%',
            textAlign: 'center',
            padding: '0.75em 0.5em',
            background: 'none'
        },
        '&.react-calendar__tile:disabled': {
            backgroundColor: '#f0f0f0'
        },
        '&.react-calendar__tile:enabled:hover,.react-calendar__tile:enabled:focus': {
            backgroundColor: '#e6e6e6'
        },
        '&.react-calendar__tile--now': {
            background: '#ffff76'
        },
        '&.react-calendar__tile--now:enabled:hover,.react-calendar__tile--now:enabled:focus': {
            background: '#ffffa9'
        },
        '&.react-calendar__tile--hasActive': {
            background: '#76baff'
        },
        '&.react-calendar__tile--hasActive:enabled:hover,.react-calendar__tile--hasActive:enabled:focus': {
            background: '#a9d4ff'
        },
        '&.react-calendar__tile--active': {
            background: '#006edc',
            color: 'white'
        },
        '&.react-calendar__tile--active:enabled:hover,.react-calendar__tile--active:enabled:focus': {
            background: '#1087ff'
        },
        '&.react-calendar--selectRange .react-calendar__tile--hover': {
            backgroundColor: '#e6e6e6'
        }
    }
});

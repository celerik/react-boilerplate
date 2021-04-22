export default theme => Object.assign({}, {
    adjustText: {
        color: theme.palette.text.disable,
        fontSize: 14,
        textAlign: 'center',
        height: 'auto',
        width: '85%'
    },
    backdropClassName: {
        backgroundColor: 'rgba(254, 254, 254, 0.1)',
        backdropFilter: 'blur(15px)'
    },
    bottom: {
        border: '1px solid mediumpurple',
        color: '#161c3a',
        height: 40,
        marginBottom: 21,
        marginLeft: 9,
        marginRight: 9,
        padding: '10px 15px 10px 15px',
        textTransform: 'none',
        '&::first-letter': {
            textTransform: 'capitalize'
        }
    },
    bottomActions: {
        display: 'flex',
        justifyContent: 'center'
    },
    bottomDisabled: {
        backgroundColor: theme.palette.primary.light,
        color: 'white'
    },
    bottomDisabledObservation: {
        backgroundColor: theme.palette.primary.warn,
        color: 'white'
    },
    content: {
        margin: 'auto',
        display: 'flex',
        height: 'auto',
        marginLeft: '34px',
        marginRight: '34px',
        padding: 0,
        width: 'auto'
    },
    closeButton: {
        color: '#323232',
        height: 11,
        position: 'absolute',
        right: 11,
        top: 10,
        width: 11
    },
    paper: {
        height: 'auto',
        width: 'auto'
    },
    titleHeader: {
        alignItems: 'center',
        color: 'black',
        display: 'flex',
        height: 36,
        justifyContent: 'center',
        marginBottom: 15,
        marginTop: 25,
        padding: 0,
        '& .MuiTypography-h6': {
            fontSize: 'x-large',
            fontWeight: 600
        }
    }
});

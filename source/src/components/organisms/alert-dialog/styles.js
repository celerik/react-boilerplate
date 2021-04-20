export default (theme) => Object.assign({}, {
    adjustText: {
        color: theme.palette.text.disable,
        display: 'flex',
        fontSize: 15,
        margin: 'auto',
        marginTop: -13,
        textAlign: '-webkit-center',
        width: '100%'
    },
    backdropClassName: {
        backgroundColor: 'rgba(254, 254, 254, 0.1)',
        backdropFilter: 'blur(15px)'
    },
    button: {
        border: '1px solid mediumpurple',
        color: '#161c3a',
        margin: 10,
        marginBottom: 21,
        padding: '8px 15px 8px 15px',
        textTransform: 'capitalize'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 0,
        radius: 5
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
        width: 434,
        height: 198
    },
    titleHeader: {
        alignItems: 'center',
        color: 'black',
        display: 'flex',
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

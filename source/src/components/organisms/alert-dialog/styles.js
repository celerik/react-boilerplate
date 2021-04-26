export default theme => Object.assign({}, {
    backdropClassName: {
        backgroundColor: 'rgba(254, 254, 254, 0.1)',
        backdropFilter: 'blur(15px)'
    },
    bottom: {
        border: '1px solid',
        color: '#161c3a',
        height: 40,
        marginBottom: 21,
        marginLeft: 9,
        marginRight: 9,
        padding: '10px 15px'
    },
    bottomActions: {
        display: 'flex',
        justifyContent: 'center'
    },
    bottomDisabled: {
        backgroundColor: theme.palette.primary.ligth,
        color: 'white'
    },
    bottomFilled: {
        backgroundColor: theme.palette.primary.warn,
        color: 'white'
    },
    content: {
        alignItems: 'center',
        color: theme.palette.text.disable,
        display: 'flex',
        flexDirection: 'column',
        fontSize: 14,
        margin: '0 18px',
        textAlign: 'center'
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
        width: '45%'
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

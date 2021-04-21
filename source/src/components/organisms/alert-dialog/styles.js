export default theme => Object.assign({}, {
    adjustText: {
        color: theme.palette.text.disable,
        fontSize: 14,
        textAlign: 'center'
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
        padding: '10px 15px 10px 15px'
    },
    bottomActions: {
        display: 'flex',
        justifyContent: 'center'
    },
    bottomDisabled: {
        backgroundColor: theme.palette.primary.light,
        color: 'white'
    },
    content: {
        display: 'flex',
        height: 40,
        marginLeft: '34px',
        marginRight: '34px',
        padding: 0,
        width: 343
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
        height: 198,
        width: 434
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

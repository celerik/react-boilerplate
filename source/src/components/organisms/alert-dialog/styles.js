export default (theme) => Object.assign({}, {
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
        height: '40px',
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
    content: {
        display: 'flex',
        height: '40px',
        marginLeft: '34px',
        marginRight: '34px',
        padding: 0,
        width: '355px'
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
        height: '36px',
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

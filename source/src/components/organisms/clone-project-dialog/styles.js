export default () => ({
    adjustText: {
        color: 'gray',
        display: 'flex',
        margin: 'auto',
        textAlign: '-webkit-center',
        width: '100%'
    },
    acctionContainer: {
        width: 434,
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 20,
        radius: 5
    },
    backdropClassName: {
        backgroundColor: 'rgba(254, 254, 254, 0.1)',
        backdropFilter: 'blur(15px)'
    },
    button: {
        border: '1px solid mediumpurple',
        color: '#161c3a',
        padding: '8px 15px 8px 15px',
        textTransform: 'capitalize',
        width: '40',
        margin: 10,
        marginBottom: 0,
        marginTop: 0
    },
    closeButton: {
        marginRight: 5,
        marginTop: 10,
        padding: 3,
        color: '#293131',
        position: 'absolute',
        right: 0
    },
    titleHeader: {
        marginTop: 5,
        alignItems: 'center',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        '& .MuiTypography-h6': {
            fontSize: 'x-large',
            fontWeight: 600
        }
    }
});

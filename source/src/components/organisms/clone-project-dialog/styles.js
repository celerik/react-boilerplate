export default () => ({
    acctionContainer: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 0,
        radius: 5,
        width: 434
    },
    adjustText: {
        color: 'gray',
        display: 'flex',
        fontSize: 15,
        margin: 'auto',
        paddingTop: 0,
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
        textTransform: 'capitalize',
        width: '40'
    },
    closeButton: {
        color: '#293131',
        marginRight: 5,
        marginTop: 10,
        padding: 3,
        position: 'absolute',
        right: 0
    },
    titleHeader: {
        alignItems: 'center',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 25,
        '& .MuiTypography-h6': {
            fontSize: 'x-large',
            fontWeight: 'bolder',
            fontWeight: 600
        }
    }
});

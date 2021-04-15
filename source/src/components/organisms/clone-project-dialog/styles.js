export default () => ({
    adjustText: {
        display: 'flex',
        margin: 'auto',
        textAlign: '-webkit-center',
        width: '70%'
    },
    acctionContainer: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 20,
        padding: 0
    },
    button: {
        border: '3px solid mediumpurple',
        color: 'black',
        padding: '8 12',
        textTransform: 'capitalize',
        width: '40'
    },
    closeButton: {
        color: 'black',
        position: 'absolute',
        right: 0
    },
    titleHeader: {
        alignItems: 'center',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        '& .MuiTypography-h6': {
            fontSize: 'x-large',
            fontWeight: 'bold'
        }
    }
});

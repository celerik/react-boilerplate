export default () => ({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        padding: '30px 20px',
        width: 400
    },
    buttonAdd: {
        backgroundColor: '#8675FF',
        color: 'white',
        height: 47,
        marginBottom: 30,
        width: 124
    },
    searchBar: {
        margin: '0px 0px 30px 0px !Important',
        '& .inputRounded, .MuiOutlinedInput-root': {
            borderRadius: 50
        }
    },
    title: {
        fontWeight: 'bold',
        letterSpacing: 2
    },
    titleHeader: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between'
    }
});

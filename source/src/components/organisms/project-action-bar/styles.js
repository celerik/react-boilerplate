export default () => ({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: 400,
        padding: '30px 20px'
    },
    buttonAdd: {
        color: 'white',
        backgroundColor: '#8675FF',
        width: 124,
        height: 47,
        marginBottom: 30
    },
    searchBar: {
        '& .inputRounded, .MuiOutlinedInput-root': {
            borderRadius: 50
        },
        margin: '0px 0px 30px 0px !Important'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

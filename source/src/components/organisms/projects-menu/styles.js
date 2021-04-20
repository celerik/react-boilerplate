export default (theme) => Object.assign({}, {
    buttonAdd: {
        backgroundColor: theme.palette.primary.light,
        color: 'white',
        height: 47,
        marginTop: 30,
        width: 140
    },
    searchBar: {
        margin: '0px 0px 30px 0px !Important',
        '& .inputRounded, .MuiOutlinedInput-root': {
            borderRadius: 50
        }
    },
    title: {
        letterSpacing: 1.6
    },
    titleHeader: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between'
    }
});

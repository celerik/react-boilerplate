export default theme => ({
    containerCard: {
        '&:hover': {
            backgroundColor: theme.palette.background.default
        }
    },
    disabledButton: {
        backgroundColor: 'white',
        border: 1,
        borderColor: theme.palette.primary.contrastText,
        borderRadius: 0,
        borderStyle: 'solid',
        textTransform: 'none'
    },
    refreshIcon: {
        height: 15,
        width: 10
    },
    itemContainer: {
        marginLeft: 10,
        marginRight: 5
    }
});

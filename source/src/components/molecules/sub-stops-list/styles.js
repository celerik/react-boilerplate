export default theme => ({
    listContainer: {
        width: '100%',
        margin: 5
    },
    icon: {
        color: theme.palette.text.secondary,
        marginRight: 7
    },
    item: {
        '&:hover': {
            backgroundColor: theme.palette.background.secondary
        },
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        padding: 5
    }
});

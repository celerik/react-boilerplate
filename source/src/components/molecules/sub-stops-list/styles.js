export default theme => ({
    listContainer: {
        width: '100%'
    },
    icon: {
        color: theme.palette.text.secondary
    },
    item: {
        '&:hover': {
            backgroundColor: theme.palette.background.secondary
        }
    }
});

export default theme => ({
    listContainer: {
        width: '100%'
    },
    item: {
        height: 25,
        '& .MuiTypography-root, .MuiIcon-root': {
            color: theme.palette.text.hint,
            fontSize: 10
        }
    }
});

export default theme => Object.assign({}, {
    mainContainer: {
        color: theme.palette.text.disabled,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    },
    text: {
        color: theme.palette.text.disabled,
        fontSize: 16,
        marginLeft: 9
    }
});

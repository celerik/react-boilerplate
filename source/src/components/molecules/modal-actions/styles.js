export default theme => Object.assign({}, {
    container: {
        background: theme.palette.common.pearl,
        border: `1px solid ${theme.palette.text.contrastText}`,
        borderRadius: 1,
        bottom: 50,
        boxShadow: '0px 1px 4px rgb(0 0 0 / 10%)',
        opacity: 1,
        padding: '7px 15px',
        position: 'absolute',
        right: -40,
        width: 153
    },
    text: {
        padding: '2px 0px 4px',
        textTransform: 'capitalize'
    },
    title: {
        fontSize: 15,
        fontWeight: 600,
        padding: '4px 0px'
    }
});

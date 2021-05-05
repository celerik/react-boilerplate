export default theme => Object.assign({}, {
    container: {
        background: theme.palette.common.pearl,
        boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)',
        opacity: 1,
        position: 'relative',
        width: 153,
        zIndex: 1
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

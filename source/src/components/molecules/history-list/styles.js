export default theme => Object.assign({}, {
    connector: {
        backgroundColor: theme.palette.background.secondary
    },
    icon: {
        background: theme.palette.primary.summer,
        border: 'none',
        color: theme.palette.background.tertiary
    },
    paper: {
        padding: '6px 16px'
    }
});

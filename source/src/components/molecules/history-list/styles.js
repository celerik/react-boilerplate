export default theme => Object.assign({}, {
    connector: {
        backgroundColor: theme.palette.background.secondary
    },
    icon: {
        background: theme.palette.primary.warn,
        border: 'none',
        color: theme.palette.background.contrastText
    },
    paper: {
        padding: '6px 16px'
    }
});

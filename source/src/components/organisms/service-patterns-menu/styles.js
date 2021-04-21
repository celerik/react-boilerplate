export default theme => Object.assign({}, {
    buttonAdd: {
        backgroundColor: theme.palette.primary.light,
        color: 'white',
        height: 47,
        marginTop: 30,
        width: 208
    },
    buttonLock: {
        backgroundColor: 'white',
        border: '1px solid',
        color: theme.palette.primary.lila,
        display: 'flex',
        height: 47,
        marginTop: 14,
        width: 210,
        textTransform: 'none'
    },
    mainContainer: {
        height: '100%',
        position: 'relative',
        width: 440
    },
    title: {
        letterSpacing: 1.6,
        marginBottom: 15,
        marginTop: 28
    },
    servicePatternsContainer: {
        height: '60%',
        minHeight: 300,
        overflowY: 'auto'
    }
});

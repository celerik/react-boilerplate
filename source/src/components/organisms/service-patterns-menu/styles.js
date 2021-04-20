export default theme => Object.assign({}, {
    buttonAdd: {
        backgroundColor: theme.palette.primary.light,
        color: 'white',
        height: 47,
        marginTop: 30,
        width: 208,
        textTransform: 'capitalize'
    },
    buttonBlock: {
        backgroundColor: 'white',
        border: '1px solid',
        color: theme.palette.primary.lila,
        display: 'flex',
        height: 47,
        marginTop: 14,
        textTransform: 'capitalize',
        width: 210
    },
    mainContainer: {
        height: '100%',
        position: 'relative',
        width: 440
    },
    title: {
        letterSpacing: 1.6,
        marginBottom: 15,
        marginTop: 28,
        textTransform: 'uppercase'
    },
    servicePatternsContainer: {
        height: '60%',
        minHeight: 300,
        overflowY: 'auto'
    }
});

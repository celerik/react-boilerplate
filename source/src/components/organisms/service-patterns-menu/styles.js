export default theme => Object.assign({}, {
    buttonAdd: {
        backgroundColor: theme.palette.primary.light,
        color: 'white',
        height: 47,
        marginTop: 30
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
        overflowY: 'auto'
    }
});

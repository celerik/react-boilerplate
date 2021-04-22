export default theme => Object.assign({}, {
    buttonAdd: {
        backgroundColor: theme.palette.primary.light,
        color: 'white',
        height: 47,
        marginTop: 30,
        textTransform: 'none',
        width: 208,
        '&::first-letter': {
            textTransform: 'capitalize'
        }
    },
    buttonLock: {
        backgroundColor: 'white',
        border: '1px solid',
        color: theme.palette.primary.lila,
        display: 'flex',
        height: 47,
        marginTop: 14,
        width: 210,
        textTransform: 'none',
        '&::first-letter': {
            textTransform: 'capitalize'
        }
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
        textTransform: 'none',
        '&::first-letter': {
            textTransform: 'capitalize'
        }
    },
    servicePatternsContainer: {
        height: '60%',
        overflowY: 'auto'
    }
});

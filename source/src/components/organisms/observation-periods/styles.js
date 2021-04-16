export default (theme) => Object.assign({}, {
    buttonAdd: {
        backgroundColor: theme.palette.primary.warn,
        bottom: 5,
        color: 'white',
        height: 47,
        marginTop: 30,
        position: 'absolute'
    },
    mainContainer: {
        height: '100%',
        position: 'relative',
        width: 440
    },
    servicePatternsContainer: {
        height: '60%',
        minHeight: 300,
        overflowY: 'auto'
    },
    subTitle: {
        letterSpacing: 1.6,
        marginBottom: 15,
        marginTop: 5
    },
    timeline: {
        '& .MuiTimelineItem-missingOppositeContent:before': {
            content: 'none'
        }
    },
    title: {
        letterSpacing: 1.6,
        marginBottom: 10,
        marginTop: 28,
        textTransform: 'uppercase'
    }
});

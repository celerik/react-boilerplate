export default theme => Object.assign({}, {
    buttonAdd: {
        backgroundColor: theme.palette.primary.warn,
        bottom: 5,
        color: 'white',
        height: 47,
        marginTop: 30,
        position: 'absolute',
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
    servicePatternsContainer: {
        height: '60%',
        minHeight: 300,
        overflowY: 'auto'
    },
    subTitle: {
        color: theme.palette.text.hint,
        letterSpacing: 0.8,
        marginBottom: 15,
        marginTop: 5
    },
    timeline: {
        paddingLeft: 16,
        paddingRight: 0,
        paddingTop: 6,
        '& .MuiTimelineItem-missingOppositeContent:before': {
            content: 'none'
        },
        '& .MuiTimelineContent-root': {
            paddingRight: 0,
        },
    },
    title: {
        letterSpacing: 1.6,
        marginBottom: 10,
        marginTop: 28,
        textTransform: 'uppercase'
    },
    titleContainer: {
        color: theme.palette.text.text4,
        marginBottom: 18
    },
    titleHeader: {
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: 600,
        letterSpacing: '-0.04em',
        textAlign: 'center'
    }
});

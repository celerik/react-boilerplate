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
    },
    titleContainer: {
        color: '#878F9E',
        marginBottom: '18px'
    },
    titleHeader: {
        fontFamily: 'Poppins',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: 600,
        letterSpacing: '-0.04em',
        lineHeight: '36px',
        marginBottom: '-12px',
        textAlign: 'center'
    }
});

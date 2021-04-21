export default theme => Object.assign({}, {
    actions: {
        display: 'flex',
        justifyContent: 'start',
        padding: '0px 24px'
    },
    attribute: {
        marginRight: 8
    },
    backdropClassName: {
        backdropFilter: 'blur(2px)',
        backgroundColor: 'rgba(254, 254, 254, 0.1)'
    },
    cancel: {
        backgroundColor: 'white',
        border: '1px solid #8675FF',
        borderRadius: 0,
        color: '#8675FF',
        height: 47,
        padding: '0px 15px',
        textTransform: 'capitalize'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    input: {
        textAlign: 'end',
        padding: '5px 0px'
    },
    inputfield: {
        backgroundColor: 'white',
        borderRadius: 4,
        margin: 0,
        marginLeft: 10,
        width: 'min-content',
        '& .MuiInputBase-root': {
            padding: '0px 5px'
        },
        border: `2px solid ${theme.palette.background.secondary}`,
        '& .MuiTypography-root': {
            color: theme.palette.text.contrastText
        },
        '&:hover': {
            '& .MuiInputBase-root': {
                borderBottom: `1px solid ${theme.palette.primary.main}`

            }
        }
    },
    inputLarge: {
        minWidth: 95
    },
    inputMedium: {
        minWidth: 75
    },
    inputSmall: {
        minWidth: 55
    },
    subTitle: {
        fontWeight: 500,
        letterSpacing: 2,
        margin: '15px 0px',
        textTransform: 'uppercase'
    },
    mainContainer: {
        '& .MuiDialog-paperWidthSm': {
            backgroundColor: theme.palette.common.pearl,
            height: 727,
            left: '30vh',
            padding: '20px 12px 33px 15px',
            position: 'absolute',
            width: 496
        }
    },
    nameProject: {
        margin: '10px 0px',
        width: '60%'
    },
    save: {
        backgroundColor: '#8675FF',
        borderRadius: 0,
        color: 'white',
        height: 47,
        padding: '0px 15px',
        textTransform: 'capitalize'
    },
    title: {
        color: theme.palette.text.secondary,
        marginBottom: 4
    },
    text: {
        fontWeight: 200,
        fontSize: 13
    }
});

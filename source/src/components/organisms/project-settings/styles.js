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
        border: `1px solid ${theme.palette.primary.light}`,
        borderRadius: 0,
        color: theme.palette.primary.light,
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
        borderBottom: `1px solid ${theme.palette.primary.main}`,
        width: 'min-content',
        '& .MuiInputBase-root': {
            padding: '0px 2px'
        },
        border: `2px solid ${theme.palette.background.secondary}`,
        '& .MuiTypography-root': {
            color: theme.palette.text.contrastText
        },
        '&:hover': {
            '& .MuiInputBase-root': {
                borderBottom: `1px solid ${theme.palette.primary.main}`
            }
        },
        '& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
            display: 'none'
        }
    },
    inputLarge: {
        minWidth: 100
    },
    inputMedium: {
        minWidth: 87
    },
    inputSmall: {
        minWidth: 65
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
        textTransform: 'initial'
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

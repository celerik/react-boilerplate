export default (theme) => ({
    actionsDialog: {
        justifyContent: 'start',
        padding: '3px 1px'
    },
    backdropClassName: {
        backdropFilter: 'blur(2px)',
        backgroundColor: 'rgba(254, 254, 254, 0.1)'
    },
    contentDialog: {
        padding: '40px 10px',
        letterSpacing: '0.1em'
    },
    inputfield: {
        backgroundColor: 'white',
        borderRadius: 4,
        height: 35,
        letterSpacing: 0,
        margin: 0,
        marginLeft: 10,
        width: 85,
        '& .MuiInputBase-root': {
            padding: '0px 2px'
        },
        border: `2px solid ${theme.palette.background.secondary}`,
        '& .MuiTypography-root': {
            color: theme.palette.text.contrastText,
            fontSize: 14
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
    mainContainer: {
        '& .MuiDialog-paperWidthSm': {
            backgroundColor: theme.palette.common.pearl,
            height: 727,
            left: '30vh',
            padding: '20px 12px 33px 15px',
            position: 'absolute',
            width: 496
        },
        '& .MuiTypography-body2': {
            color: 'black',
            fontSize: 12,
            letterSpacing: 0
        }
    },
    nameProject: {
        margin: '10px 0px',
        width: '60%',
        '& .MuiInputBase-input': {
            border: `2px solid ${theme.palette.primary.light}`,
            color: theme.palette.primary.dark,
            fontSize: 12,
            fontWeight: 300,
            letterSpacing: 0,
            padding: 10
        }
    },
    outlineButton: {
        backgroundColor: theme.palette.primary.light,
        border: `1px solid ${theme.palette.primary.main}`,
        color: 'white',
        display: 'flex',
        fontSize: 14,
        height: 44,
        justifyContent: 'start',
        padding: '10px 15px'
    },
    outlineButtonWhite: {
        backgroundColor: 'white',
        border: `1px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.dark,
        display: 'flex',
        fontSize: 14,
        height: 44,
        padding: '10px 15px'
    },
    subTitle: {
        color: theme.palette.primary.dark,
        fontSize: 12,
        fontWeight: 300,
        letterSpacing: 0,
        marginTop: 16
    },
    vehicleFeature: {
        backgroundColor: 'white',
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: 2,
        color: theme.palette.primary.dark,
        height: 44,
        marginTop: 20
    }
});

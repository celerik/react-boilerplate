export default (theme) => ({
    actionsDialog: {
        justifyContent: 'start',
        padding: '3px 1px'
    },
    contentDialog: {
        padding: '40px 10px'
    },
    outlineButton: {
        backgroundColor: 'white',
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: 2,
        color: theme.palette.primary.dark,
        textTransform: 'none',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        display: 'flex',
        height: 44,
        justifyContent: 'start',
        padding: '0px 24px'
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
    backdropClassName: {
        backdropFilter: 'blur(2px)',
        backgroundColor: 'rgba(254, 254, 254, 0.1)'
    },
    backIcon: {
        padding: 1
    }
});
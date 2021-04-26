export default theme => Object.assign({}, {
    actionsContainer: {
        alignItems: 'center',
        display: 'flex',
        position: 'absolute',
        right: 25,
        '& span': {
            color: theme.palette.text.secondary,
            marginLeft: 10
        },
        '& span:hover': {
            cursor: 'pointer'
        }
    },
    mainContainer: {
        alignItems: 'center',
        display: 'flex',
        height: 72,
        padding: 15,
        position: 'relative',
        '&:hover': {
            backgroundColor: theme.palette.background.secondary
        }
    },
    routeNameContainer: {
        alignItems: 'center',
        borderRadius: 2,
        display: 'flex',
        height: 42,
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 11,
        minWidth: 64,
        width: 64
    },
    checkboxSelect: {
        border: `2px solid ${theme.palette.primary.contrastText}`,
        borderRadius: 4,
        height: 21,
        marginLeft: 1,
        marginRight: 2,
        width: 21
    },
    checkboxUnSelect: {
        color: `${theme.palette.primary.contrastText}`
    },
    textContainer: {
        width: '55%'
    }
});

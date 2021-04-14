export default theme => Object.assign({}, {
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
        marginRight: 11,
        width: 64
    },
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
    }
});

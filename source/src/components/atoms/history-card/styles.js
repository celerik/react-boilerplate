export default theme => Object.assign({}, {
    actionsContainer: {
        alignItems: 'center',
        display: 'flex',
        position: 'absolute',
        right: 25,
        '& :hover': {
            cursor: 'pointer'
        }
    },
    date: {
        marginLeft: 10
    },
    icon: {
        color: theme.palette.primary.summer
    },
    infoTime: {
        display: 'flex',
        alignSelf: 'baseline',
        top: 15
    },
    mainContainer: {
        alignItems: 'center',
        display: 'flex',
        height: 72,
        padding: 15,
        position: 'relative',
        '&:hover': {
            backgroundColor: theme.palette.background.tertiary,
            border: `1px solid ${theme.palette.primary.summer}`
        }
    }
});

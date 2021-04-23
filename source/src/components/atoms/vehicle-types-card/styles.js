export default theme => ({
    containerCard: {
        '&:hover': {
            backgroundColor: theme.palette.background.default
        }
    },
    disabledButton: {
        backgroundColor: 'white',
        border: 1,
        borderColor: theme.palette.primary.contrastText,
        borderRadius: 0,
        borderStyle: 'solid',
        textTransform: 'none'
    },
    refreshIcon: {
        height: 15,
        width: 10
    },
    itemContainer: {
        marginLeft: 10,
        marginRight: 5
    },
    tooltip: {
        backgroundColor: 'white',
        border: 1,
        borderColor: theme.palette.background.default,
        borderRadius: 0,
        boxShadow: `1px 3px 1px ${theme.palette.primary.contrastText}`,
        color: 'black'
    },
    tooltipButton: {
        color: theme.palette.primary.main
    }
});

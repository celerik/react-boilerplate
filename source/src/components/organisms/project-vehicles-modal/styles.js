export default theme => ({
    dialogPaper: {
        height: '102vh',
        width: '50vw'
    },
    actionsDialog: {
        justifyContent: 'start'
    },
    outlineButton: {
        backgroundColor: 'white',
        border: 1,
        borderColor: theme.palette.primary.main,
        borderRadius: 0,
        borderStyle: 'solid',
        color: theme.palette.primary.main,
        textTransform: 'none'
    }
});

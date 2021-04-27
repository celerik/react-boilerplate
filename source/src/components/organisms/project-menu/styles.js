export default theme => ({
    buttonAdd: {
        backgroundColor: theme.palette.primary.light,
        color: 'white',
        height: 'auto',
        marginTop: 60,
        width: 140
    },
    centerIcon: {
        alignItems: 'center',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        width: 'calc(100% - 28px)',
        '&:hover': {
            backgroundColor: theme.palette.primary.none
        }
    },
    containerCards: {
        overflowY: 'auto'
    },
    mainContainer: {
        display: 'content'
    },
    option: {
        alignItems: 'center',
        borderBottom: `solid 1px ${theme.palette.background.primary}`,
        cursor: 'pointer',
        display: 'flex',
        height: 52,
        paddingLeft: 12,
        width: 'calc(100% - 28px)',
        '&:hover': {
            backgroundColor: 'white'
        },
        '&:last-of-type': {
            borderBottom: 'none'
        }
    },
    optionText: {
        color: theme.palette.text.secondary,
        fontWeight: 'bold',
        marginLeft: 19
    },
    projectName: {
        letterSpacing: 1.6,
        textTransform: 'uppercase'
    },
    settingsIcon: {
        color: theme.palette.text.hint,
        fontSize: 14
    },
    titleContainer: {
        alignItems: 'center',
        display: 'flex',
        marginBottom: 41,
        marginTop: 31
    }
});

export default theme => ({
    buttonAdd: {
        backgroundColor: theme.palette.primary.light,
        color: 'white',
        height: 'auto',
        maxWidth: 350,
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
            backgroundColor: 'white'
        },
        '& .MuiTypography-root': {
            color: theme.palette.text.secondary,
            fontWeight: 600,
            marginLeft: 19
        }
    },
    containerCards: {
        overflowY: 'auto'
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

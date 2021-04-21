export default theme => Object.assign({}, {
    buttonAdd: {
        backgroundColor: theme.palette.primary.light,
        color: 'white',
        height: 'auto',
        marginTop: 60,
        width: 140
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
            backgroundColor: theme.palette.background.default
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
        fontSize: 14,
        marginLeft: 14
    },
    titleContainer: {
        alignItems: 'center',
        display: 'flex',
        marginBottom: 41,
        marginTop: 31
    }
});

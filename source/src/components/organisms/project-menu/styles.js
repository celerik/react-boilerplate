export default (theme) => Object.assign({}, {
    buttonAdd: {
        backgroundColor: '#8675FF',
        color: 'white',
        height: 47,
        marginTop: 60,
        width: 140
    },
    projectName: {
        letterSpacing: 1.6,
        textTransform: 'uppercase'
    },
    titleContainer: {
        alignItems: 'center',
        display: 'flex',
        marginBottom: 41,
        marginTop: 31
    },
    settingsIcon: {
        color: theme.palette.text.hint,
        fontSize: 14,
        marginLeft: 14
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
    }
});

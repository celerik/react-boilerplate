export default theme => Object.assign({}, {
    attribute: {
        color: theme.palette.text.secondary,
        fontSize: 13,
        fontWeight: 300,
        marginRight: 8
    },
    attributeContainer: {
        alignItems: 'center',
        display: 'flex'
    },
    icon: {
        fontSize: 13
    },
    mainContainer: {
        alignItems: 'center',
        display: 'flex',
        height: 56,
        justifyContent: 'space-between',
        padding: '7px 5px',
        '&:hover': {
            backgroundColor: theme.palette.background.secondary
        }
    },
    nameProject: {
        margin: '10px 0px',
        width: '60%'
    },
    textSecondary: {
        color: theme.palette.text.contrastText,
        fontSize: 13,
        marginRight: 8
    }
});

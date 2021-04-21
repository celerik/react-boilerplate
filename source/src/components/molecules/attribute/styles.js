export default theme => Object.assign({}, {
    attribute: {
        color: theme.palette.text.secondary,
        fontSize: 13,
        fontWeight: 300,
        marginRight: 8
    },
    attributeContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        fontSize: 13
    },
    mainContainer: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '7px 5px',
        height: 56,
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
        marginRight: 8,
        fontSize: 13
    }
});

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
    dateItem: {
        color: theme.palette.text.hint,
        marginBlockStart: 'auto',
        marginLeft: 4,
        marginRight: 4
    },
    date: {
        color: theme.palette.text.contrastText,
        display: 'flex',
        fontSize: 16,
        marginLeft: 10,
        width: '100%'
    },
    icon: {
        color: theme.palette.primary.warn
    },
    iconDate: {
        color: theme.palette.text.disabled
    },
    infoTime: {
        alignSelf: 'baseline',
        display: 'flex',
        top: 15
    },
    mainContainer: {
        alignItems: 'center',
        borderRadius: 2,
        display: 'flex',
        height: 70,
        marginBottom: 30,
        paddingLeft: 5,
        paddingTop: 5,
        position: 'relative',
        '&:hover': {
            backgroundColor: theme.palette.background.contrastText,
            border: `1px solid ${theme.palette.primary.warn}`,
            '& $date': {
                color: theme.palette.text.secondary
            },
            '& $dateItem': {
                color: theme.palette.text.secondary,
                fontWeight: 'bold'
            },
            '& $iconDate': {
                color: theme.palette.text.secondary
            }
        }
    }
});

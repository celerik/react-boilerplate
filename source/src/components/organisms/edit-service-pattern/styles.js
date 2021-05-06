export default theme => ({
    mainContainer: {
        height: '100%',
        position: 'relative',
        width: 600
    },
    daysSection: {
        display: 'flex',
        '& .MuiIcon-root, .MuiIconButton-root': {
            color: theme.palette.text.secondary,
            fontSize: 24,
            height: 24,
            width: 24
        }
    },
    divider: {
        margin: '10px 0',
        width: '60%'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 11,
        marginTop: 31
    },
    headerInfoLeft: {
        width: '45%'
    },
    headerInfoRight: {
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
        '& div': {
            display: 'flex',
            alignItems: 'center',
            marginBottom: 10
        }
    },
    lockedStatus: {
        color: theme.palette.text.hint,
        '& .MuiIcon-root': {
            color: 'black',
            marginRight: 10
        }
    },
    weekdays: {
        color: theme.palette.text.secondary,
        marginLeft: 7,
        fontSize: 12,
        width: 'max-content'
    },
    label: {
        color: theme.palette.text.disabled,
        marginBottom: 13,
        marginTop: 11,
        width: '65%'
    },
    icon: {
        color: theme.palette.text.hint,
        fontSize: 14
    },
    subtitle: {
        color: theme.palette.text.disabled,
        fontSize: 20,
        marginTop: 7
    }
});

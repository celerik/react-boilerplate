export default theme => ({
    mainContainer: {
        height: '100%',
        position: 'relative'
    },
    daysSection: {
        alignItems: 'center',
        display: 'flex'
    },
    divider: {
        margin: '10px 0',
        width: '70%'
    },
    header: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 11,
        marginTop: 31
    },
    label: {
        color: theme.palette.text.disabled,
        marginBottom: 13,
        marginTop: 11,
        width: '65%'
    },
    lockedStatus: {
        alignItems: 'center',
        display: 'flex'
    },
    icon: {
        color: theme.palette.text.hint,
        fontSize: 14
    },
    subtitle: {
        color: theme.palette.text.disabled,
        fontSize: 20,
        '& .MuiTypography-root': {
            width: '50%'
        }
    }
});

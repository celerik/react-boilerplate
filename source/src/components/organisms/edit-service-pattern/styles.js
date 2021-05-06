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
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 11,
        marginTop: 31,
        '& .MuiTypography-root': {
            width: '60%'
        }
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
        '& .MuiTypography-root': {
            width: '50%'
        }
    }
});

export default theme => Object.assign({}, {
    actions: {
        padding: 3
    },
    actionsContainer: {
        marginLeft: 20
    },
    onFocus: {
        boxShadow: '0px 0px 0px 9px rgb(134 117 255 / 20%)'
    },
    onFocusLine: {
        '&:after': {
            boxShadow: '0px 0px 0px 4px rgb(134 117 255 / 20%)'
        }
    },
    bodyOptions: {
        display: 'flex'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative'
    },
    stops: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 0
    },
    headerOptions: {
        display: 'flex',
        justifyContent: 'start'
    },
    stopItem: {
        alignItems: 'flex-start',
        display: 'flex',
        paddingBottom: 25,
        position: 'relative',
        '&:last-child, &:first-child': {
            fontWeight: 'bold',
            '& $stopNumber': {
                height: 35,
                marginLeft: 0,
                width: 35
            },
            '& $stopNumber:before': {
                borderStyle: 'groove'
            }
        }
    },
    stopLine: {
        '&:after': {
            background: theme.palette.primary.light,
            content: '""',
            height: '100%',
            left: 16,
            marginLeft: 0,
            position: 'absolute',
            top: 30,
            width: 2,
            zIndex: -1
        }
    },
    stopNumber: {
        alignItems: 'center',
        background: theme.palette.primary.light,
        borderRadius: '50%',
        color: 'white',
        display: 'flex',
        height: 25,
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 23,
        position: 'relative',
        width: 25,
        '& svg': {
            fontSize: 22
        },
        '&:before': {
            border: `${theme.palette.primary.light}  2px solid`,
            borderRadius: '50%',
            borderStyle: 'dashed',
            bottom: -5,
            content: '""',
            left: -5,
            position: 'absolute',
            right: -5,
            top: -5
        }
    },
    stopIcon: {
        width: '15%',
        height: '100%'
    },
    title: {
        width: '85%',
        height: '20%'
    }
});

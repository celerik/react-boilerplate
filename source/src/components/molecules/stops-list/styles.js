export default theme => Object.assign({}, {
    container: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative'
    },
    stops: {
        display: 'flex',
        flexDirection: 'column',
        padding: 0
    },
    stopItem: {
        alignItems: 'center',
        display: 'flex',
        margin: '15px 0',
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
        },
        '&:last-child': {
            '& $stopNumber:after': {
                display: 'none'
            }
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
        '&:after': {
            background: theme.palette.primary.light,
            bottom: '-100%',
            content: '""',
            height: '100%',
            position: 'absolute',
            width: 2
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
    }
});
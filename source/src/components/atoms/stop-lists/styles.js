export default () => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative'
    },
    stops: {
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        '& li': {
            margin: '15px 0'
        }
    },
    stopItem: {
        alignItems: 'center',
        display: 'flex',
        position: 'relative',
        '&:last-child, &:first-child': {
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
        background: '#8675FF',
        borderRadius: '50%',
        color: 'white',
        display: 'flex',
        height: 25,
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 10,
        position: 'relative',
        width: 25,
        '&:after': {
            background: '#8675FF',
            bottom: '-100%',
            content: '""',
            height: '100%',
            position: 'absolute',
            width: 2
        },
        '&:before': {
            border: '#8675FF 2px solid',
            borderRadius: '50%',
            borderStyle: 'dashed',
            bottom: '-5px',
            content: '""',
            left: '-5px',
            position: 'absolute',
            right: '-5px',
            top: '-5px;'
        }
    }
});

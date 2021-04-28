export default () => Object.assign({}, {
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
            '& span': {
                height: 35,
                marginLeft: 0,
                width: 35
            },
            '& span:before': {
                borderStyle: 'groove'
            }
        },
        '&:last-child': {
            '& span:after': {
                display: 'none'
            }
        }
    }
});

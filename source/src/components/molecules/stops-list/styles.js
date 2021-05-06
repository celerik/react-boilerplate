export default theme => Object.assign({}, {
    actionsContainer: {
        marginLeft: 20,
        '& .MuiIconButton-root': {
            fontSize: 20,
            marginRight: 9,
            height: 22,
            width: 22
        }
    },
    onFocusLine: {
        '&:after': {
            boxShadow: '0px 0px 0px 4px rgb(134 117 255 / 20%)'
        }
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
        paddingLeft: 0
    },
    stopItem: {
        display: 'flex',
        '&:last-child, &:first-child': {
            fontWeight: 'bold',
            '& span:before': {
                borderStyle: 'groove'
            }
        }
    },
    segmentContainer: {
        position: 'relative',
        left: 16,
        height: '100%',
        width: 100
    },
    segmentEdit: {
        color: theme.palette.text.secondary,
        position: 'absolute',
        top: 15,
        left: 25
    },
    stopLine: {
        background: theme.palette.primary.light,
        position: 'absolute',
        height: '100%',
        width: 2
    },
    stopIcon: {
        minHeight: 80,
        height: '100%',
        width: 50
    },
    infoContainer: {
        width: '100%'
    },
    title: {
        alignItems: 'center',
        display: 'flex',
        width: '100%'
    },
    subStopsContainer: {
        marginTop: 5,
        backgroundColor: 'white',
        position: 'relative',
        minWidth: 170,
        width: 'fit-content',
        marginBottom: 15
    }
});

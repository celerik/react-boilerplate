export default theme => ({
    actions: {
        display: 'flex',
        justifyContent: 'center'
    },
    backDrop: {
        backdropFilter: 'blur(2px)',
        backgroundColor: 'rgba(254, 254, 254, 0.1)'
    },
    checkboxSelect: {
        border: `2px solid ${theme.palette.primary.contrastText}`,
        borderRadius: 4,
        height: 21,
        marginLeft: 1,
        marginRight: 2,
        width: 21
    },
    checkboxUnSelect: {
        border: `2px solid ${theme.palette.primary.contrastText}`,
        borderRadius: 4,
        height: 21,
        marginLeft: 1,
        marginRight: 2,
        width: 21
    },
    checkContainer: {
        alignItems: 'center',
        display: 'flex',
        height: 40
    },
    content: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)'
    },
    cancel: {
        backgroundColor: 'white',
        border: '1px solid #8675FF',
        color: '#8675FF',
        height: 47,
        padding: '0px 10px'
    },
    suscribe: {
        backgroundColor: '#8675FF',
        color: 'white',
        height: 47,
        padding: '0px 10px'
    }
});

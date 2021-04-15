export default theme => ({
    actions: {
        display: 'flex',
        justifyContent: 'center'
    },
    backDrop: {
        backdropFilter: 'blur(1px)',
        backgroundColor: '#FEFEFE',
        opacity: 0.8
    },
    checkboxSelect: {
        border: `2px solid ${theme.palette.primary.contrastText}`,
        borderRadius: 4,
        height: 15,
        marginLeft: 2,
        marginRight: 3,
        width: 15
    },
    checkboxUnSelect: {
        color: `${theme.palette.primary.contrastText}`
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

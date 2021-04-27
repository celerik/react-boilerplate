export default theme => Object.assign({}, {
    main: {
        alignItems: 'center',
        background: theme.palette.background.light,
        border: `${theme.palette.primary.light} 0.3px solid`,
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
            border: `${theme.palette.primary.light} 2px solid`,
            borderRadius: '50%',
            borderStyle: 'dashed',
            bottom: -7,
            content: '""',
            left: -7,
            position: 'absolute',
            right: -7,
            top: -7
        }
    }
});

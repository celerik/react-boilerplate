export default theme => ({
    mainContainer: {
        alignItems: 'center',
        backgroundColor: theme.palette.primary.light,
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
            bottom: -5,
            content: '""',
            left: -5,
            position: 'absolute',
            right: -5,
            top: -5
        }
    }
});

export default theme => ({
    containerCard: {
        '&:hover': {
            backgroundColor: theme.palette.background.default
        }
    },
    refreshIcon: {
        height: 15,
        width: 10,
        marginRight: 5
    },
    tooltip: {
        border: 1,
        borderColor: theme.palette.background.default,
        borderRadius: 0,
        boxShadow: `1px 3px 1px ${theme.palette.primary.contrastText}`,
        color: 'black'
    },
    tooltipTitle: {
        color: theme.palette.text.secondary,
        fontWeight: 'bold'
    },
    tooltipSubtitle: {
        color: theme.palette.primary.main
    },
    inputfield: {
        borderRadius: 2,
        margin: 0,
        marginLeft: 10,
        minWidth: '140%',
        width: 'min-content',
        '& .MuiInputBase-root': {
            padding: '0px 2px'
        },
        border: `2px solid ${theme.palette.background.secondary}`,
        '& .MuiTypography-root': {
            color: theme.palette.text.contrastText
        },
        '&:hover': {
            '& .MuiInputBase-root': {
                borderBottom: `1px solid ${theme.palette.primary.main}`
            }
        },
        '& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
            display: 'none'
        }
    },
    icon: {
        '& .MuiIcon-root': {
            fontSize: 20
        }
    }
});

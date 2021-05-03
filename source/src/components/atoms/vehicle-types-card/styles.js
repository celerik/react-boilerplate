export default theme => ({
    containerCard: {
        '&:hover': {
            backgroundColor: theme.palette.background.default
        },
        padding: '0 7px'
    },
    refreshIcon: {
        padding: 0
    },
    tooltip: {
        backgroundColor: theme.palette.common.pearl,
        border: `1px solid ${theme.palette.background.default}`,
        borderRadius: '0%',
        boxShadow: `1px 3px 1px ${theme.palette.primary.contrastText}`,
        color: 'black',
        margin: '-21px 0 0 0',
        minHeight: 60
    },
    tooltipTitle: {
        color: theme.palette.text.secondary,
        fontWeight: 'bolder'
    },
    tooltipSubtitle: {
        color: theme.palette.primary.main,
        marginTop: 5
    },
    inputfield: {
        borderRadius: 5,
        margin: '0 15px',
        minWidth: '140%',
        width: 'min-content',
        '& .MuiInputBase-root': {
            padding: '3px 7px',
            color: theme.palette.text.secondary
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
        },
        '& .MuiInputBase-input': {
            fontWeight: 'bolder'
        }
    },
    icon: {
        '& .MuiIcon-root': {
            color: '#323232',
            fontSize: 18,
            fontWeight: 'bold',
            margin: '0 5px'
        }
    },
    selectorList: {
        marginBottom: 15,
        width: '100%',
        '& .MuiFormLabel-root': {
            fontWeight: 'bold',
            fontSize: 14,
            color: theme.palette.text.scondary
        }
    },
    vehicleTypeText: {
        margin: '0 7px'
    }
});

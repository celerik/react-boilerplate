export default () => ({
    formControlContainer: {
        width: '100%',
        '& .MuiSelect-select.MuiSelect-select': {
            display: 'contents'
        },
        '& .MuiInputBase-root': {
            fontWeight: 'bold'
        },
        '$ .MuiInput-underline:before': {
            borderBottom: '0px !Important'
        }
    },
    teamIcon: {
        borderRadius: 5,
        height: 20,
        width: 20
    },
    iconOnly: {
        alignItems: 'center',
        display: 'flex',
        margin: 'auto'
    },
    icon: {
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 13,
        width: 30,
        minWidth: '0 !important'
    },
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 44,
        margin: 5,
        minWidth: 70,
        display: 'flex',
        flexDirection: 'row',
        width: '90%'
    }
});

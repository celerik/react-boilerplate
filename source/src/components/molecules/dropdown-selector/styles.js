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
        marginLeft: 13,
        marginRight: 10,
        minWidth: '0 !important',
        width: 30
    },
    itemContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        height: 44,
        justifyContent: 'flex-start',
        margin: 5,
        minWidth: 70,
        width: '90%'
    }
});

export default () => ({
    dropdownButton: {
        backgroundColor: '#8675FF',
        color: 'white',
        paddingLeft: '15px !important'
    },
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
    selector: {
        '& .MuiOutlinedInput-root': {
            height: 50
        },
        '& .MuiMenu-paper': {
            borderRadius: 0,
            top: '80px !Important',
            width: '210px !Important'
        },
        '& .MuiListItem-root': {
            height: 40,
            paddingLeft: 1
        },
        '& .MuiList-padding': {
            padding: 0
        },
        '& .MuiListItem-root.Mui-selected': {
            fontWeight: 'bold'
        }
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
    },
    itemList: {
        display: 'flex',
        justifyContent: 'center'
    },
    menuItem: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    teamIcon: {
        borderRadius: 5,
        height: 20,
        width: 20
    }
});

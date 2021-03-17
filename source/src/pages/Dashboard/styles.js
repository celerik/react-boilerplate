
import globals from '../../styles/global';

// eslint-disable-next-line import/no-anonymous-default-export
export default theme => Object.assign({}, globals(theme), {
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3)
    },
});
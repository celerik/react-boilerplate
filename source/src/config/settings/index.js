// @packages
import merge from 'deepmerge';

// @json
import env from './env-local.json';
import globals from './globals.json';


/**
 * @return {Object}
 */
const getSettings = () => {
    return merge(globals, env);
};

export default getSettings();

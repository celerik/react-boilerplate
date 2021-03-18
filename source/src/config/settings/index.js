// @packages
import merge from 'deepmerge';

// @json
import envUnitTest from './env-unit-test.json';
import globals from './globals.json';


/**
 * @return {Object}
 */
const getSettings = () => {
    console.log(merge(globals, envUnitTest), 'el merge')
    return merge(globals, envUnitTest);
};

export default getSettings();

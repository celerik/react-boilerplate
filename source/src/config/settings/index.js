// @packages
import merge from 'deepmerge';

// @json
import envLocal from './env-local.json';
import envUnitTest from './env-unit-test.json';
import globals from './globals.json';

// @scripts
import { constants } from '../../core/constants';

/**
 * @return {Object}
 */
const getSettings = () => {
    switch (process.env.REACT_APP_ENV) {
        case constants.environment.LOCAL:
            return merge(globals, envLocal);
        case constants.environment.UNIT_TEST:
            return merge(globals, envUnitTest);
        default:
            return globals;
    }
};

export default getSettings();

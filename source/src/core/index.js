// @scripts
import { config } from '../config';
import { constants } from './constants';
import { initializeGlobalUI } from './global-ui';
import { initializeReduxStore } from './redux-store';
import { initializeServiceMocker } from './service-mocker';

// @exports
export * from './constants';

const getEnvironment = () => ({
    isLocal: config.settings.environment.name
        === constants.environment.LOCAL,
    isUnitTest: config.settings.environment.name
        === constants.environment.UNIT_TEST
});

const initializeApp = () => {
    const environment = getEnvironment();
    const store = initializeReduxStore(environment);
    const globalUI = initializeGlobalUI(store);
    const serviceMocker = initializeServiceMocker(store);
    global.core = {
        globalUI,
        serviceMocker,
        store
    };

    return global.core;
};

export const {
    globalUI,
    serviceMocker,
    store
} = initializeApp();

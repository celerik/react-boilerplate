// @scripts
import { initializeServiceMocker } from './service-mocker';
import { initializeReduxStore } from './redux-store';
import { config } from '../config';
import { constants } from './constants';

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
    const serviceMocker = initializeServiceMocker(store);
    global.core = {
        store,
        serviceMocker
    };

    return global.core;
};

export const { serviceMocker, store } = initializeApp();

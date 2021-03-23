// @scripts
import { config } from '../config';
import { constants } from './constants';
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
    const serviceMocker = initializeServiceMocker(store);
    global.core = {
        serviceMocker,
        store
    };

    return global.core;
};

export const { serviceMocker, store } = initializeApp();

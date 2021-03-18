// @scripts
import { initializeServiceMocker } from './service-mocker';
import { initializeReduxStore } from './redux-store';

const initializeApp = () => {
  const store = initializeReduxStore()
  const serviceMocker = initializeServiceMocker(store);
  global.core = {
    store,
    serviceMocker
  };

  return global.core;
};

export const { serviceMocker, store } = initializeApp();

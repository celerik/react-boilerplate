// @scripts
import initialState from './initial-state';
import language from './text';
import mockData from './mock-data';
import routes from './routes';
import settings from './settings';
import { getServices } from './services';

const getConfiguration = () => {
  const services = getServices(settings.services.root);
  const config = {
    initialState,
    mockData,
    routes,
    services,
    settings,
    text: language[initialState.language]
  };

  global.config = config;

  return config;
};

export const config = getConfiguration();

// @scripts
import language from './text';
import initialState from './initial-state';
import routes from './routes';

const getConfiguration = () => {
  const config = {
    initialState,
    routes,
    text: language[initialState.language]
  };

  global.config = config;

  return config;
};

export const config = getConfiguration();

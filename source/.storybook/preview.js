// @packages
import { muiTheme } from 'storybook-addon-material-ui'
// import { config } from '../src/config';

// @scripts
import { theme } from '../src/styles/material-ui';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
	muiTheme([theme]),
  // (Story) => <Story config={config} />
];
// @packages
import { muiTheme } from 'storybook-addon-material-ui'

// @scripts
import { theme } from '../src/styles/material-ui';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
	muiTheme([theme]),
];
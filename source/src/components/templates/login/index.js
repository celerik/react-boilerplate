// @packages
import Button from '@material-ui/core/Button';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

// @scripts
import { config } from '../../../config'

const Login = ({ classes, login }) => {
  const history = useHistory();

  const onLogin = () => {
    login({ email: 'user@flowos.com', password: '123' });
    history.push(config.routes.home.url);
  }

  return (
    <div className={classes.root}>
      <Typography >{config.text.loginPage.loginTitle}</Typography>
      <Button onClick={onLogin}>
        Login
      </Button>
    </div>
  )
};

export default withStyles(styles)(Login);
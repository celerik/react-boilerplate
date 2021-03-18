// @packages
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';

// @styles
import styles from './styles';

// @scripts
import { config } from '../../config'
import {
  login
} from '../../actions';

const Dashboard = ({classes}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.account);

  const onLogin = () => {
    dispatch(login({email: 'user@flowos.com', password: '123' }));
  }

  return (
    <div className={classes.root}>
      {console.log(user, 'Veamos')}
        <Typography >{config.text.dashboardPage.helloWorld}</Typography> 
        <Button onClick={onLogin}>
          holis            
        </Button>
    </div>
  )};

export default withStyles(styles)(Dashboard)
// @packages
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

// @scripts
import { config } from '../../config'

const Dashboard = ({classes}) => (
    <div className={classes.root}>
        <Typography >{config.text.dashboardPage.helloWorld}</Typography> 
    </div>
  );

export default withStyles(styles)(Dashboard)
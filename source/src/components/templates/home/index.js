// @packages
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

// @scripts
import { config } from '../../../config';

const Home = ({ classes, login }) => {
    const onLogin = () => login({ email: 'user@flowos.com', password: '123' });
    return (
    <div className={classes.root}>
        <Typography>{config.text.dashboardPage.helloWorld}</Typography>
        <Button onClick={onLogin}>
          test
        </Button>
    </div>
    );
};

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    login: PropTypes.func
};

Home.defaultProps = {
    login: null
};

export default withStyles(styles)(Home);

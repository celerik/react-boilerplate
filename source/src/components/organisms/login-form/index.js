// @packages
import GoogleLogin from 'react-google-login';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { withStyles } from '@material-ui/core';

// @scripts
import Logo from '../../molecules/logo';
import { config } from '../../../config';
import { loginWithGoogle } from '../../../actions';

// @styles
import styles from './styles';

const LoginForm = ({
    classes,
    id
}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const onSuccessGoogleLogin = (googleResponse) => {
        const {
            profileObj: { email, name },
            tokenId: authToken
        } = googleResponse;

        dispatch(loginWithGoogle({
            email,
            name,
            authToken
        }));

        history.push(config.routes.application.home.url);
    };

    return (
        <Paper
            className={classes.mainContainer}
            elevation={2}
            id={id}
        >
            <Logo className={classes.logo} size={80} />
            <div className={classes.content}>
                <div>
                    <Typography className={classes.title} variant="h3">
                        Welcome
                    </Typography>
                    <Typography className={classes.subtitle} variant="body1">
                        Login in your account
                    </Typography>
                </div>
                <GoogleLogin
                    autoLoad
                    className={classes.loginButton}
                    clientId={config.settings.google.clientId}
                    buttonText={<Typography variant="body2">{config.text.loginPage.loginWithGoogle}</Typography>}
                    onSuccess={onSuccessGoogleLogin}
                    scope="email profile"
                    onFailure={Function.prototype}
                    cookiePolicy="single_host_origin"
                />
            </div>
        </Paper>
    );
};

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};

LoginForm.defaultProps = {
};

export default withStyles(styles)(LoginForm);

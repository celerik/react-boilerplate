// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import Login from '../../components/templates/login';
import {
    login
} from '../../actions';

const LoginPage = ({ infoUser, onLogin }) => (
    <Login
        user={infoUser}
        login={onLogin}
    />
);

const mapDispatchToProps = dispatch => bindActionCreators({
    onLogin: login
}, dispatch);

const mapStateToProps = ({
    user
}) => ({
    infoUser: user.account
});

LoginPage.propTypes = {
    infoUser: PropTypes.object.isRequired,
    onLogin: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

// @packages
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import Login from '../../components/templates/login'
import {
  login
} from '../../actions';

const LoginPage = ({ infoUser, onLogin }) => {
  return (
    <Login
      user={infoUser}
      login={onLogin}
    />
  )
};

const mapDispatchToProps = dispatch => bindActionCreators({
  onLogin: login,
}, dispatch);

const mapStateToProps = ({
  user
}) => ({
  infoUser: user.account
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
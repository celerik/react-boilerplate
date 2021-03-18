// @packages
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import Home from '../../components/templates/home'
import {
  login
} from '../../actions';

const DashboardPage = ({ infoUser, onLogin }) => {

  return (
    <Home 
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)


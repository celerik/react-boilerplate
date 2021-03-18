// @packages
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import Home from '../../components/templates/home';
import {
    login
} from '../../actions';

const DashboardPage = ({ infoUser, onLogin }) => (
    <Home
        user={infoUser}
        onLogin={onLogin}
    />
);

DashboardPage.propTypes = {
    infoUser: PropTypes.object.isRequired,
    onLogin: PropTypes.func
};

DashboardPage.defaultProps = {
    onLogin: null
};

const mapDispatchToProps = dispatch => bindActionCreators({
    onLogin: login
}, dispatch);

const mapStateToProps = ({
    user
}) => ({
    infoUser: user.account
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);

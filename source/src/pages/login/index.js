// @packages
import LoginForm from '../../components/organisms/login-form';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import Login from '../../components/templates/login';
import Map from '../../components/organisms/map';

const LoginPage = ({
    id
}) => (
    <Login
        id={id}
        backgroundComponent={<Map controls={[]} />}
    >
        <LoginForm />
    </Login>
);

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const mapStateToProps = () => ({});

LoginPage.propTypes = {
    id: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

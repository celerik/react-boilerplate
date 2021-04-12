// @packages
import MenuContent from '../../components/organisms/dashboard-menu-mapper';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import Map from '../../components/organisms/map';
import TemplateDashboard from '../../components/templates/dashboard';
import { getProjects } from '../../actions/projects';

const DashboardPage = ({
    onGetProjects
}) => {
    useEffect(() => {
        onGetProjects();
    }, []);

    return (
        <TemplateDashboard>
            <MenuContent />
            <Map />
        </TemplateDashboard>
    );
};

DashboardPage.propTypes = {
    onGetProjects: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    projects: state.projects
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onGetProjects: getProjects
}, dispatch);

export default connect(
    mapStateToProps, mapDispatchToProps
)(DashboardPage);

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
import { getTeams } from '../../actions/teams';

const DashboardPage = ({
    onGetTeams,
    onGetProjects
}) => {
    useEffect(() => {
        onGetTeams();
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
    onGetProjects: PropTypes.func.isRequired,
    onGetTeams: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    projects: state.projects
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onGetTeams: getTeams,
    onGetProjects: getProjects
}, dispatch);

export default connect(
    mapStateToProps, mapDispatchToProps
)(DashboardPage);

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
    onGetProjects,
    selectedTeam
}) => {
    useEffect(() => {
        onGetTeams();
    }, []);

    useEffect(() => {
        onGetProjects();
    }, [selectedTeam]);

    return (
        <TemplateDashboard>
            <MenuContent />
            <Map />
        </TemplateDashboard>
    );
};

DashboardPage.propTypes = {
    onGetProjects: PropTypes.func.isRequired,
    onGetTeams: PropTypes.func.isRequired,
    selectedTeam: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    projects: state.projects,
    selectedTeam: state.user.selectedTeam
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onGetTeams: getTeams,
    onGetProjects: getProjects
}, dispatch);

export default connect(
    mapStateToProps, mapDispatchToProps
)(DashboardPage);

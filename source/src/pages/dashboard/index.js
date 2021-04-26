// @packages
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import Map from '../../components/organisms/map';
import MenuContent from '../../components/organisms/dashboard-menu-mapper';
import TemplateDashboard from '../../components/templates/dashboard';
import { getProjects } from '../../actions/projects';
import { getRoutes } from '../../actions/routes';
import { getTeams } from '../../actions/teams';

const DashboardPage = ({
    onGetProjects,
    onGetRoutes,
    onGetTeams,
    selectedTeam
}) => {

    useEffect(() => {
        onGetTeams();
        onGetRoutes();
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
    onGetRoutes: PropTypes.func.isRequired,
    onGetTeams: PropTypes.func.isRequired,
    selectedTeam: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    selectedTeam: state.user.selectedTeam
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onGetProjects: getProjects,
    onGetRoutes: getRoutes,
    onGetTeams: getTeams
}, dispatch);

export default connect(
    mapStateToProps, mapDispatchToProps
)(DashboardPage);

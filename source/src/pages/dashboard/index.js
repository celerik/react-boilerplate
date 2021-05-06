// @packages
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import Map from '../../components/organisms/map';
import MenuContent from '../../components/organisms/dashboard-menu-mapper';
import TemplateDashboard from '../../components/templates/dashboard';
import { MainMenuProvider, useMainMenuContext } from '../../providers/main-menu';
import { getProjects } from '../../actions/projects';
import { getRoutes } from '../../actions/routes';
import { getTeams } from '../../actions/teams';
import { useExpandMainMenu } from '../../providers/main-menu/actions';

// eslint-disable-next-line react/prop-types
const Dashboard = ({ children }) => {
    const { expanded, visible } = useMainMenuContext();
    const expandMainMenu = useExpandMainMenu();

    return (
        <TemplateDashboard
            isMenuExpanded={expanded}
            isMenuVisible={visible}
            setMenuExpanded={expandMainMenu}
        >
            {children}
        </TemplateDashboard>
    );
};

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
        <MainMenuProvider>
            <Dashboard>
                <MenuContent />
                <Map />
            </Dashboard>
        </MainMenuProvider>
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

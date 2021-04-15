// @packages
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

// @scripts
import ObservationPeriods from '../observation-periods';
import ProjectMenu from '../project-menu';
import ProjectsMenu from '../projects-menu';
import ServicePatterns from '../service-patterns-menu';

// @styles
import styles from './styles';

const componentMapper = {
    ObservationPeriods,
    ProjectMenu,
    ProjectsMenu,
    ServicePatterns
};

const MenuContent = ({
    classes,
    id,
    visible
}) => {
    if (!visible) {
        return null;
    }

    return (
        <Paper
            className={classes.mainContainer}
            id={id}
        >
            <Switch>
                {Object.values(config.routes.dashboard).map(route => (
                    <Route
                        component={componentMapper[route.component]}
                        exact
                        key={`route-${route.name}`}
                        path={route.url}
                    />
                ))}
                <Route path="/dashboard/*">
                    <Typography>{config.text.notFoundPage.content}</Typography>
                </Route>
            </Switch>
        </Paper>
    );
};

MenuContent.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    visible: PropTypes.bool
};

MenuContent.defaultProps = {
    visible: true
};

export default withStyles(styles)(MenuContent);

// @packages
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

// @scripts


// @styles
import styles from './styles';

/**Create Organisms for these components, or templates/pages */
const MockComponent = ({ label }) => <div>{label}</div>;

const Component1 = () => <MockComponent label="PAGE 1"/>;
const Component2 = () => <MockComponent label="PAGE 2"/>;

const componentMapper = {
    Component1,
    Component2
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
        <div
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
        </div>
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

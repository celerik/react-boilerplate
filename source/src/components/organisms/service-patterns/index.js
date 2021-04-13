// @packages
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { withStyles } from '@material-ui/core';

// @scripts
import ActionButtom from '../../atoms/button';
import BackToButton from '../../molecules/back-to-button';
import { bindActionCreators } from 'redux';
import { format, formatUrlParam } from '../../../util/string';
import { getServicePatters } from '../../../actions/service-patterns';

// @ styles
import styles from './styles';

const ServicePatterns = ({
    classes,
    id,
    match
}) => {
    const { params: { projectId } } = match;
    const history = useHistory();
    const projects = useSelector(state => state.projects);
    const project = projects.find(project => project.projectId === projectId);
    const dispatch = useDispatch();
    const onGetServicePatterns = bindActionCreators(getServicePatters, dispatch);

    useEffect(() => {
        onGetServicePatterns({ projectId });
    }, [projectId]);

    if (!project) {
        return null;
    }

    const toNewServicePattern = () => {
        history.push(formatUrlParam(config.routes.dashboard.newServicePatterns.url, projectId));
    };

    return (
        <div id={id}>
            <BackToButton label={format(config.text.projectMenu.backToProject, project.projectName)} />
            <ActionButtom
                startIcon="add"
                className={classes.buttonAdd}
                onClick={toNewServicePattern}
                label={config.text.projectMenu.addServicePattern}
            />
        </div>
    );
};

ServicePatterns.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired
};

ServicePatterns.defaultProps = {};

export default withStyles(styles)(ServicePatterns);

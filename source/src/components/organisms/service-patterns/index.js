// @packages
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core';

// @scripts
import styles from './styles';
import BackToButton from '../../molecules/back-to-button';
import { format } from '../../../util/string';
import { bindActionCreators } from 'redux';
import { getServicePatters } from '../../../actions/service-patterns';

const ServicePatterns = ({
    id,
    match
}) => {
    const { params: { projectId } } = match;
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

    return (
        <div id={id}>
            <BackToButton label={format(config.text.projectMenu.backToProject, project.projectName)} />
        </div>
    );
};

ServicePatterns.propTypes = {
    id: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired
};

ServicePatterns.defaultProps = {};

export default withStyles(styles)(ServicePatterns);

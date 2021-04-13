// @packages
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @scripts
import Actionbutton from '../../atoms/button';
import BackToButton from '../../molecules/back-to-button';
import ListSelector from '../../atoms/list-selector';
import styles from './styles';
import { config } from '../../../config';
import { useSelector } from 'react-redux';

const ProjectMenu = ({
    classes,
    id,
    match
}) => {
    const { params: { projectId } } = match;
    const [route, setRoute] = useState('');
    const [servicePeriod, setServicePeriod] = useState('');
    const projects = useSelector(state => state.projects);
    const project = projects.find(project => project.projectId === projectId);

    if (!project) {
        return null;
    }

    const handleRoute = ({ value }) => {
        setRoute(value);
    };

    const handleServicePeriod = ({ value }) => {
        setServicePeriod(value);
    };

    return (
        <div id={id}>
            <BackToButton label={config.text.projectMenu.backToServicePatterns} />
            <Typography className={classes.title} variant="h4">
                {config.text.projectMenu.addAServicePattern}
            </Typography>
            <ListSelector
                placeholder={config.text.projectMenu.selectRoute}
                items={[{ text: 'Select route', value: 'Select route' }, { text: 'Select service period', value: 'Select service period' }]}
                value={route}
                onChange={handleRoute}
            />
            <ListSelector
                placeholder={config.text.projectMenu.selectServicePeriod}
                items={[{ text: 'Select route', value: 'Select route' }, { text: 'Select service period', value: 'Select service period' }]}
                value={servicePeriod}
                onChange={handleServicePeriod}
            />
            <Actionbutton
                startIcon="refresh"
                className={classes.buttonAdd}
                onClick={Function.prototype}
                label={config.text.projectMenu.addServicePattern}
            />
            <Actionbutton
                endIcon="file_upload"
                className={classes.buttonImport}
                onClick={Function.prototype}
                label={config.text.projectMenu.importServicePatterns}
            />
        </div>
    );
};

ProjectMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};

ProjectMenu.defaultProps = {};

export default withStyles(styles)(ProjectMenu);

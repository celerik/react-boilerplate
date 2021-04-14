// @packages
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @scripts
import Icon from '@material-ui/core/Icon';
import BackToButton from '../../molecules/back-to-button';
import { config } from '../../../config';
import { useSelector } from 'react-redux';

// @styles
import styles from './styles';

const ProjectMenu = ({
    classes,
    id,
    match,
    name,
    route,
    locked
}) => {
    const { params: { projectId } } = match;
    const { projects } = useSelector(state => ({ projects: state.projects }));
    const project = projects.find(project => project.projectId === projectId);

    if (!project) {
        return null;
    }

    return (
        <div id={id} className={classes.mainContainer}>
            <BackToButton label={config.text.projectMenu.backToServicePatterns} />
            <div className={classes.title}>
                <Typography variant="h3">{name}</Typography>
                <div className={classes.lockedStatus}>
                    <Icon fontSize="small">
                        {locked ? 'lock' : 'lock_open'}
                    </Icon>
                    <Typography variant="subtitle">
                        {locked ? config.text.editServicePattern.locked : config.text.editServicePattern.unlocked}
                    </Typography>
                </div>
            </div>
            <div className={classes.title}>
                <Typography className={classes.subtitle}>{route}</Typography>
            </div>
            <Typography className={classes.label}>
                {config.text.editServicePattern.editServicePatternInfo}
            </Typography>
            <Divider
                className={classes.divider}
                variant="fullWidth"
            />
        </div>
    );
};

ProjectMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    locked: PropTypes.bool,
    match: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
};

ProjectMenu.defaultProps = {
    locked: false
};

export default withStyles(styles)(ProjectMenu);

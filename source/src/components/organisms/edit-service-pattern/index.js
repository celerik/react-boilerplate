// @packages
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @scripts
import BackToButton from '../../molecules/back-to-button';
import Icon from '@material-ui/core/Icon';
import { config } from '../../../config';
import { useSelector } from 'react-redux';

// @styles
import styles from './styles';
import Project from '../../../services/project';

const ServicePatternMenu = ({
    classes,
    id,
    locked,
    match,
    route
}) => {
    const { projectId, servicePatternId } = match.params;
    const [servicePattern, setServicePattern] = useState(null);

    useEffect(async () => {
        const servicePattern = await Project.getServicePattern(projectId, servicePatternId);
        setServicePattern(servicePattern);
    }, []);

    if (!servicePattern) {
        return null;
    }

    return (
        <div id={id} className={classes.mainContainer}>
            <BackToButton label={config.text.createServicePattern.backToServicePatterns} />
            <div className={classes.title}>
                <Typography variant="h3">
                    {servicePattern.settings.servicePatternName}
                </Typography>
                <div className={classes.lockedStatus}>
                    <Icon fontSize="small">
                        {locked ? 'lock' : 'lock_open'}
                    </Icon>
                    <Typography variant="subtitle">
                        {locked ? config.text.editServicePattern.locked : config.text.editServicePattern.unlocked}
                    </Typography>
                </div>
            </div>
            <Typography className={classes.subtitle} variant="h5">
                {servicePattern.routeName}
            </Typography>
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

ServicePatternMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    locked: PropTypes.bool,
    match: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
};

ServicePatternMenu.defaultProps = {
    locked: false
};

export default withStyles(styles)(ServicePatternMenu);

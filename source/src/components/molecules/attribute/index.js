// @packages
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const ProjectSettings = ({
    attribute,
    children,
    classes,
    id,
    secondarytext
}) => (
        <div id={id} className={classes.mainContainer}>
            <div className={classes.attributeContainer}>
                <Typography variant="body2" className={classes.attribute}>
                    {attribute}
                </Typography>
                <Typography variant="body2" className={classes.textSecondary}>
                    {secondarytext}
                </Typography>
                <InfoOutlinedIcon className={classes.icon} />
            </div>
            <div>
                {children}
            </div>
        </div>
);

ProjectSettings.propTypes = {
    attribute: PropTypes.string.isRequired,
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    secondarytext: PropTypes.string
};

ProjectSettings.defaultProps = {
    children: null,
    secondarytext: null
};

export default withStyles(styles)(ProjectSettings);

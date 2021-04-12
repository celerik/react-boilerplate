// @packages
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

// @scripts
import styles from './styles';

const ServicePatternCard = ({
    classes,
    className,
    id
}) => (
    <div className={classNames(classes.mainContainer, className)} id={id} />
);

ServicePatternCard.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

ServicePatternCard.defaultProps = {};

export default withStyles(styles)(ServicePatternCard);

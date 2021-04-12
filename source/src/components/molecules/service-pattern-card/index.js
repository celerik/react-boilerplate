// @packages
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

// @scripts
import styles from './styles';

const ServicePatternCard = ({
    actions,
    classes,
    className,
    routeName,
    servicePatternName,
    operationDays,
    id
}) => (
    <div className={classNames(classes.mainContainer, className)} id={id} />
);

ServicePatternCard.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
        onClick: PropTypes.func.isRequired
    })).isRequired,
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    routeName: PropTypes.string.isRequired,
    servicePatternName: PropTypes.string.isRequired,
    operationDays: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired
};

ServicePatternCard.defaultProps = {
    className: null
};

ServicePatternCard.defaultProps = {};

export default withStyles(styles)(ServicePatternCard);

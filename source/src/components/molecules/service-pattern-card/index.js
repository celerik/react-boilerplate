// @packages
import PropTypes from 'prop-types';
import React, { cloneElement, useState } from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

// @scripts
import styles from './styles';

const formatOperationDays = (days) => {
    const createDays = (...strings) => (
        <>
            {strings[1]}
            <strong>{strings[2]}</strong>
            {strings[3]}
            <strong>{strings[4]}</strong>
        </>
    );

    const [str1, str2] = config.text.servicePatternsMenu.runDays.split('{0}');
    const allDaysExceptLast = [...days];
    const lastDay = allDaysExceptLast.pop();
    const strDays = allDaysExceptLast.join(', ').replace(/, $/, '');

    return createDays`${str1} ${strDays} ${str2} ${lastDay}`;
};

const ServicePatternCard = ({
    actions,
    backgroundColor,
    className,
    classes,
    id,
    operationDays,
    routeColor,
    routeName,
    servicePatternName
}) => {
    const [actionsVisible, setActionsVisibility] = useState(false);

    const onHoverCard = () => {
        setActionsVisibility(true);
    };

    return (
        <div
            className={classNames(classes.mainContainer, className)}
            id={id}
            onMouseLeave={() => setActionsVisibility(false)}
            onFocus={onHoverCard}
            onMouseOver={onHoverCard}
        >
            <div
                className={classes.routeNameContainer}
                style={{
                    border: `1px solid ${routeColor}`,
                    color: routeColor,
                    backgroundColor
                }}
            >
                {routeName}
            </div>
            <div>
                <Typography variant="h4">{servicePatternName}</Typography>
                <Typography variant="h6">{formatOperationDays(operationDays)}</Typography>
            </div>
            <div className={classes.actionsContainer}>
                {actionsVisible && actions.map((action) => (
                    <Tooltip
                        title={action.name}
                        key={`${id}-${action.name}-tooltip`}
                        enterDelay={500}
                        enterNextDelay={500}
                    >
                        {typeof action.icon === 'string'
                            ? <Icon>{action.icon}</Icon>
                            : cloneElement(action.icon)}
                    </Tooltip>
                ))}
            </div>
        </div>
    );
};

ServicePatternCard.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
        onClick: PropTypes.func.isRequired
    })).isRequired,
    backgroundColor: PropTypes.string,
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    routeColor: PropTypes.string,
    routeName: PropTypes.string.isRequired,
    servicePatternName: PropTypes.string.isRequired,
    operationDays: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string.isRequired
};

ServicePatternCard.defaultProps = {
    className: null,
    backgroundColor: '#FEF1E2',
    routeColor: '#FDB561',
    operationDays: []
};

export default withStyles(styles)(ServicePatternCard);

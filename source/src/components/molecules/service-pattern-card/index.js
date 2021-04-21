// @packages
import CheckBox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import React, { cloneElement, useState } from 'react';
import Stop from '@material-ui/icons/Stop';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

// @scripts
import { theme } from '../../../styles/material-ui';

// @styles
import styles from './styles';

const IconStatus = withStyles(styles)(({ status }) => (
    status === 'success' ? (
        <Icon style={{ color: theme.palette.primary.success }}>
            check_circle
        </Icon>
    ) : (
        <Icon style={{ color: status === 'warning' ? theme.palette.primary.warn : theme.palette.primary.error }}>
            warning
        </Icon>
    )
));

const ServicePatternCard = ({
    actions,
    className,
    classes,
    id,
    isCheckeable,
    isChecked,
    onCheck,
    operationDays,
    color,
    routeName,
    servicePatternName,
    statusService,
    value
}) => {
    const [actionsVisible, setActionsVisibility] = useState(false);

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
            {isCheckeable && (
                <CheckBox
                    checked={isChecked}
                    checkedIcon={<Stop fontSize="medium" className={classes.checkboxSelect} />}
                    color="primary"
                    icon={<CheckBoxOutlineBlankIcon className={classes.checkboxUnSelect} />}
                    onChange={() => onCheck(value)}
                />
            )}
            {statusService && (
                <IconStatus status={statusService} />
            )}
            <div
                className={classes.routeNameContainer}
                style={{
                    backgroundColor: `${color}33`,
                    border: `1px solid ${color}`,
                    color
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
    })),
    className: PropTypes.string,
    color: PropTypes.string,
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    isCheckeable: PropTypes.bool,
    isChecked: PropTypes.bool,
    onCheck: PropTypes.func,
    operationDays: PropTypes.arrayOf(PropTypes.string),
    routeName: PropTypes.string.isRequired,
    servicePatternName: PropTypes.string.isRequired,
    statusService: PropTypes.string,
    value: PropTypes.string.isRequired
};

ServicePatternCard.defaultProps = {
    actions: Array.prototype,
    className: null,
    color: '#FDB561',
    isCheckeable: false,
    isChecked: undefined,
    onCheck: undefined,
    operationDays: [],
    statusService: null
};

export default withStyles(styles)(ServicePatternCard);

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
import IconStatus from '../../atoms/icon-status';
import FormatDays from '../../atoms/format-days';

// @styles
import styles from './styles';

const ServicePatternCard = ({
    actions,
    className,
    classes,
    color,
    id,
    isCheckeable,
    isChecked,
    onCheck,
    operationDays,
    routeName,
    servicePatternName,
    status,
    statusService,
    value
}) => {
    const [actionsVisible, setActionsVisibility] = useState(false);

    const onHoverCard = () => {
        setActionsVisibility(true);
    };

    return (
        <div
            className={classNames(classes.mainContainer, className)}
            id={`service-pattern-card-${id}`}
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
            {statusService && <IconStatus status={statusService} />}
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
            <div className={classes.textContainer}>
                <Typography variant="h4">{servicePatternName}</Typography>
                <FormatDays days={operationDays} id={`${id}-format-days`} />
            </div>
            <div className={classes.actionsContainer}>
                {status && <IconStatus status={status} />}
                {actionsVisible && actions.map((action) => (
                    <Tooltip
                        title={action.name}
                        key={`${id}-${action.name}-tooltip`}
                        onClick={() => action.onClick(id)}
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
    classes: PropTypes.object.isRequired,
    color: PropTypes.string,
    id: PropTypes.string.isRequired,
    isCheckeable: PropTypes.bool,
    isChecked: PropTypes.bool,
    onCheck: PropTypes.func,
    operationDays: PropTypes.arrayOf(PropTypes.string),
    routeName: PropTypes.string.isRequired,
    servicePatternName: PropTypes.string.isRequired,
    status: PropTypes.string,
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
    status: '',
    statusService: null
};

export default withStyles(styles)(ServicePatternCard);

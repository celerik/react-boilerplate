// @packages
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { makeStyles, Popover, withStyles } from '@material-ui/core';

// @styles
import styles from './styles';
import { useStopsContext } from '../../../providers/stops';
import { useSetActiveStops } from '../../../providers/stops/actions';

const customClasses = makeStyles({
    main: props => ({
        backgroundColor: `${props.color} !important`,
        '&:before': {
            border: `${props.color} 2px solid !important`
        }
    })
});

const StopIcon = ({
    className,
    classes,
    color,
    id,
    label,
    actions,
    stopId
}) => {
    const ariaDescribedById = `${id}-actions`;
    const [anchorEl, setAnchorEl] = useState(null);
    const colorClasses = customClasses({ color });
    const setActiveStops = useSetActiveStops();
    const { activeStops } = useStopsContext();

    const isActive = activeStops.includes(stopId);
    const onClick = event => setAnchorEl(event.currentTarget);
    const onClose = () => setAnchorEl(null);

    return (
        <div
            onFocus={() => setActiveStops([stopId])}
            onMouseOver={() => setActiveStops([stopId])}
            onMouseLeave={() => setActiveStops([])}
        >
            {actions && anchorEl && (
                <Popover
                    className={classes.actionsContainer}
                    anchorEl={anchorEl}
                    id={ariaDescribedById}
                    onClose={onClose}
                    open={isActive}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center'
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                    }}
                >
                    {actions}
                </Popover>
            )}
            <span
                aria-describedby={ariaDescribedById}
                className={classNames(
                    className,
                    classes.mainContainer,
                    colorClasses.main,
                    isActive && classes.onFocus
                )}
                id={id}
                onClick={onClick}
                onKeyDown={event => event.key !== 'Tab' && onClick(event)}
                ref={anchorEl}
                role="button"
                tabIndex={0}
            >
                {label || <LocationOnIcon />}
            </span>
        </div>
    );
};

StopIcon.propTypes = {
    actions: PropTypes.node,
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    color: PropTypes.string,
    stopId: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

StopIcon.defaultProps = {
    actions: null,
    className: null,
    color: null
};

export default withStyles(styles)(StopIcon);

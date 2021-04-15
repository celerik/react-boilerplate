// @packages
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

// @scripts
import styles from './styles';

const HistoryCard = ({
    className,
    classes,
    from,
    to,
    id
}) => {
    const [actionsVisible, setActionsVisibility] = useState(false);

    const onHoverCard = () => {
        setActionsVisibility(true);
    };

    return (
        <div
            className={classNames(classes.mainContainer, className)}
            id={id}
            onFocus={onHoverCard}
            onMouseLeave={() => setActionsVisibility(false)}
            onMouseOver={onHoverCard}
        >
            <div className={classes.infoTime}>
                <CalendarTodayIcon />
                <Typography className={classes.date}>
                    From
                    <strong>
                        { from }
                    </strong>
                    to
                    <strong>
                        { to }
                    </strong>
                </Typography>
            </div>
            <div className={classes.actionsContainer}>
                {actionsVisible && (
                    <Tooltip
                        title="Delete"
                        key={`${id}-delete-tooltip`}
                        enterDelay={500}
                        enterNextDelay={500}
                    >
                        <DeleteIcon className={classes.icon} />
                    </Tooltip>
                )}
            </div>
        </div>
    );
};

HistoryCard.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
};

HistoryCard.defaultProps = {
    className: null
};

export default withStyles(styles)(HistoryCard);

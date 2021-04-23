// @packages
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import RefreshIcon from '@material-ui/icons/Refresh';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core';

// @scripts
import Actionbutton from '../button';
import SelectorList from '../list-selector';

// styles
import styles from './styles';

const typeDays = [
    {
        text: 'mon',
        value: 'mon'
    },
    {
        text: 'tue',
        value: 'tue'
    },
    {
        text: 'wed',
        value: 'wed'
    }
];

const VehicleTypeCard = ({
    classes,
    id,
    needUpdate,
    vehicleType,
    index
}) => {
    const [actionsVisible, setActionsVisibility] = useState(false);

    const onHoverCard = () => {
        setActionsVisibility(true);
    };

    return (
        <div
            className={classes.containerCard}
            id={id}
            onFocus={onHoverCard}
            onMouseLeave={() => setActionsVisibility(false)}
            onMouseOver={onHoverCard}
        >
            <Grid
                alignItems="center"
                container
                justify="center"
                key={`${id}-${index}`}
                row
            >
                <Grid
                    className={classes.itemContainer}
                    container
                    item
                    xs={3}
                >
                    {needUpdate && actionsVisible && (
                        <Tooltip title="holi">
                            <IconButton className={classes.refreshIcon}>
                                <RefreshIcon />
                            </IconButton>
                        </Tooltip>
                    )}
                    <Typography>{vehicleType}</Typography>
                </Grid>
                <Grid
                    className={classes.itemContainer}
                    item
                    xs={4}
                >
                    <SelectorList
                        items={typeDays}
                        id={id}
                    />
                </Grid>
                <Grid item xs={3} className={classes.itemContainer}>
                    <Actionbutton
                        className={classes.disabledButton}
                        disabled
                        label="4 Vehicles"
                    />
                </Grid>
                <Grid item xs={1}>
                    <IconButton>
                        <FileCopyOutlinedIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    );
};

VehicleTypeCard.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    index: PropTypes.number,
    needUpdate: PropTypes.bool,
    vehicleType: PropTypes.string.isRequired
};

VehicleTypeCard.defaultProps = {
    index: 0,
    needUpdate: true
};

export default withStyles(styles)(VehicleTypeCard);

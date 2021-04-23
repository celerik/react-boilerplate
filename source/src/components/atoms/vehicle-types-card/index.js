// @packages
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @scripts
import Actionbutton from '../button';
import SelectorList from '../list-selector';
import { config } from '../../../config';

// styles
import styles from './styles';

const text = config.text.projectMenu.projectsVehiclesModal;

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

const Tooltipcontainer = (classes) => (
    <div>
        <Typography>{text.needUpdate}</Typography>
        <Actionbutton label={text.update} className={classes.tooltipButton} />
    </div>
);

const VehicleTypeCard = ({
    classes,
    id,
    needUpdate,
    vehicleType
}) => (
    <Tooltip
        classes={{ tooltip: classes.tooltip }}
        interactive
        placement="bottom-start"
        title={needUpdate && Tooltipcontainer(classes)}
    >
        <div
            className={classes.containerCard}
            id={id}
        >
            <Grid
                alignItems="center"
                container
                justify="center"
                row
            >
                <Grid
                    className={classes.itemContainer}
                    container
                    item
                    xs={3}
                >
                    {needUpdate && (
                        <IconButton className={classes.refreshIcon}>
                            <RefreshIcon />
                        </IconButton>
                    )}
                    <Typography>{vehicleType}</Typography>
                </Grid>
                <Grid
                    className={classes.itemContainer}
                    item
                    xs={4}
                >
                    <SelectorList
                        id={id}
                        items={typeDays}
                        placeholder={text.typeDays}
                    />
                </Grid>
                <Grid item xs={3} className={classes.itemContainer}>
                    <Actionbutton
                        className={classes.disabledButton}
                        disabled
                        label={text.forVehicles}
                    />
                </Grid>
                <Grid item xs={1}>
                    <IconButton>
                        <FileCopyOutlinedIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    </Tooltip>
);

VehicleTypeCard.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    needUpdate: PropTypes.bool,
    vehicleType: PropTypes.string.isRequired
};

VehicleTypeCard.defaultProps = {
    needUpdate: false
};

export default withStyles(styles)(VehicleTypeCard);

// @packages
import Grid from '@material-ui/core/Grid';
import Inputfield from '../../molecules/input-field';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @scripts
import IconButton from '../icon-button';
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

const TooltipContent = withStyles(styles)(({ classes }) => (
    <>
        <Typography className={classes.tooltipTitle}>{text.needUpdate}</Typography>
        <Typography className={classes.tooltipSubtitle}>{text.update}</Typography>
    </>
));

const VehicleTypeCard = ({
    classes,
    id,
    needUpdate,
    quantityAvailable,
    vehicleTypeName
}) => {
    const { quantity } = quantityAvailable[0];
    const [infoValue, setInfoValue] = useState(quantity);
    const [tooltipVisible, setTooltipVisibility] = useState(false);

    const onHover = () => {
        setTooltipVisibility(true);
    };

    return (
        <Tooltip
            classes={{ tooltip: classes.tooltip }}
            interactive
            open={tooltipVisible && needUpdate}
            placement="bottom-start"
            title={needUpdate && <TooltipContent />}
        >
            <Grid
                alignItems="center"
                className={classes.containerCard}
                container
                id={id}
                justify="center"
                onFocus={onHover}
                onMouseLeave={() => setTooltipVisibility(false)}
                onMouseOver={onHover}
                row
            >
                <Grid
                    container
                    item
                    xs={4}
                >
                    {needUpdate && (
                        <IconButton
                            buttonClassname={classes.refreshIcon}
                            icon="refresh"
                            id={id}
                        />
                    )}
                    <Typography
                        className={classes.vehicleTypeText}
                        style={{ fontWeight: tooltipVisible && 'bold' }}
                        variant="body2"
                    >
                        {vehicleTypeName}
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={4}
                >
                    <SelectorList
                        className={classes.selectorList}
                        id={id}
                        itemDesProp="text"
                        itemValProp="value"
                        items={typeDays}
                        placeholder={text.typeDays}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Inputfield
                        className={classes.inputfield}
                        endAdornment={text.vehicles}
                        onChange={setInfoValue}
                        value={infoValue}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Inputfield
                        className={classes.icon}
                        icon="content_copy"
                    />
                </Grid>
            </Grid>
        </Tooltip>
    );
};

VehicleTypeCard.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    quantityAvailable: PropTypes.arrayOf(PropTypes.shape({
        dayType: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    needUpdate: PropTypes.bool,
    vehicleTypeName: PropTypes.string.isRequired
};

TooltipContent.propTypes = {
    classes: PropTypes.object.isRequired
};

VehicleTypeCard.defaultProps = {
    needUpdate: false
};

export default withStyles(styles)(VehicleTypeCard);

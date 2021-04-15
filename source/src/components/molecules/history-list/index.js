// @packages
import PropTypes from 'prop-types';
import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { withStyles } from '@material-ui/core';

// @scripts
import HistoryCard from '../../atoms/history-card';

// @styles
import styles from './styles';

const HistoryList = ({
    id,
    classes,
    items
}) => (
    <Timeline id={id}>
      {items.map((item, index) => (
        <TimelineItem key={index} id={`${id}-${index}`}>
            <TimelineSeparator>
                <TimelineDot variant="outlined" className={classes.icon}>
                <VisibilityIcon />
                </TimelineDot>
                {index !== items.length - 1 && (
                    <TimelineConnector className={classes.connector} />
                )}
            </TimelineSeparator>
            <TimelineContent>
                <HistoryCard from={item.from} to={item.to} />
            </TimelineContent>
        </TimelineItem>
      ))}

    </Timeline>
);

HistoryList.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        from: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired
    })).isRequired
};

HistoryList.defaultProps = {};

export default withStyles(styles)(HistoryList);

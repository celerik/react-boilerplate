// @packages
import React from 'react';

// @script
import HistoryCard from '.';

export default {
    component: HistoryCard,
    title: 'History  Card'
};

const HistoryCardTemplate = (args) => <HistoryCard {...args} />

export const FirstStory = HistoryCardTemplate.bind({});

FirstStory.args = {
    id: 'history-card-storybook',
}
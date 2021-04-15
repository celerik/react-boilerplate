// @packages
import React from 'react';

// @script
import HistoryList from '.';

export default {
    component: HistoryList,
    title: 'History list'
};

const HistoryListTemplate = (args) => <HistoryList {...args} />

export const FirstStory = HistoryListTemplate.bind({});

FirstStory.args = {
    id: 'history-list-storybook',
    items: [
        {from: '12/02/21 ', to: '21/02/21' },
        {from: '12/02/21 ', to: '21/02/21' },
        {from: '12/02/21 ', to: '21/02/21' }
    ]
}
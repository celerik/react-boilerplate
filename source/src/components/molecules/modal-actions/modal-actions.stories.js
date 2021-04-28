// @packages
import React from 'react';

// @script
import ActionsStop from '.';

export default {
    component: ActionsStop,
    title: 'Actions Stop'
};

const HistoryListTemplate = (args) => <ActionsStop {...args} />

export const FirstStory = HistoryListTemplate.bind({});

FirstStory.args = {
    id: 'history-list-storybook',
    items: [{
        name: 'test',
        icon: 'add',
        onClick: Function.prototype
    }]
}
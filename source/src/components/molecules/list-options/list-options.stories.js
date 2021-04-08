// @packages
import React from 'react';

// @scripts
import ListOptions from '.';

export default {
    title: 'List items',
    component: ListOptions
};

const Template = (args) => <ListOptions {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    id: 'Action Bar 1',
    items: [{ text: 'Project name 1' }, { text: 'Project name 2' }]
};

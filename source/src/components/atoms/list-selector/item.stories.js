// @packages
import React from 'react';

// @scripts
import ListSelector from '.';

export default {
    title: 'List selector',
    component: ListSelector
};

const Template = (args) => <ListSelector {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    id: 'List 1',
    onChange: Function.prototype
};

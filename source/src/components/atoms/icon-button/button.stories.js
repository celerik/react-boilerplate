// @packages
import React from 'react';

// @scripts
import IconButton from '.';

export default {
    title: 'icon button',
    component: IconButton
};

const Template = (args) => <IconButton {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    id: 'Icon button'
};

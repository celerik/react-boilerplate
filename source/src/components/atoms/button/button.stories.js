// @packages
import React from 'react';

// @scripts
import button from '.';

export default {
    title: 'button',
    component: button
};

const Template = (args) => <button {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    id: 'Button 1',
    label: 'Testing',
    onClick: Function.prototype,
    startIcon: 'refresh'
};

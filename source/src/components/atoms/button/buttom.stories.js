// @packages
import React from 'react';

// @scripts
import Buttom from '.';

export default {
    title: 'Buttom',
    component: Buttom
};

const Template = (args) => <Buttom {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    id: 'Buttom 1',
    label: 'Testing',
    onClick: Function.prototype,
    startIcon: 'refresh'
};

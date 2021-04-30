// @packages
import React from 'react';

// @scripts
import PointStop from '.';

export default {
    title: 'Point stop',
    component: PointStop
};

const Template = (args) => <PointStop {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    id: '1'
}
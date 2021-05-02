// @packages
import React from 'react';

// @scripts
import StopListComponent from '.';

export default {
    title: 'Stop list',
    component: StopListComponent
};

const stopsList = [
    {
        id: '1',
        name: 'stop 1'
    }
]

const Template = (args) => <StopListComponent {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    id: 'List 1',
    stops: stopsList
};

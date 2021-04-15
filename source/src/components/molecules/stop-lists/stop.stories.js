// @packages
import React from 'react';

// @scripts
import StopListComponent from '.';
import stopsList from  './stops-list.json'

export default {
    title: 'Stop list',
    component: StopListComponent
};

const Template = (args) => <StopListComponent {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    id: 'List 1',
    stops: stopsList
};

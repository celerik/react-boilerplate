// @packages
import React from 'react';

// @script
import SubStopsList from '.';

export default {
    title: 'Sub Stops List',
    component: SubStopsList
}

const subStops = [
    {
        id: '1',
        nameStop: 'Name stop 1'
    },
    {
        id: '2',
        nameStop: 'Name stop 2'
    },
    {
        id: '3',
        nameStop: 'Name stop 3'
    }
];

const actions = [
    {
        icon: 'add_circle',
        onclick: Function.prototype
    }
];

const Template = (args) => <SubStopsList {...args} />

export const FirstStory = Template.bind({});

FirstStory.args = {
    actions,
    subStops
}
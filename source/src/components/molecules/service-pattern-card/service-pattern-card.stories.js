// @packages
import React from 'react';

// @script
import ServicePatternCard from '.';

export default {
    component: ServicePatternCard,
    title: 'Service Pattern Card'
};

const ServicePatternCardTemplate = (args) => <ServicePatternCard {...args} />

export const FirstStory = ServicePatternCardTemplate.bind({});

FirstStory.args = {
    actions: [{
        name: 'Test 1',
        icon: 'home',
        onClick: Function.prototype
    }, {
        name: 'Test 2',
        icon: 'edit',
        onClick: Function.prototype
    }],
    backgroundColor: '#DBF8E6',
    id: 'service-pattern-card-storybook',
    operationDays: ['Mon', 'Tue', 'Fri'],
    routeColor: '#5ABB81',
    routeName: '17 A',
    servicePatternName: 'Service pattern name'
}
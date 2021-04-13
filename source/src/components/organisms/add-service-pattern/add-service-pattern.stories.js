// @packages
import React from 'react';

// @scripts
import ProjectMenu from '.';

export default {
    title: 'Menu bar',
    component: ProjectMenu
};

const Template = (args) => <ProjectMenu {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    id: 'project Bar 1',
    onCollapse: Function.prototype,
    visible: true
};

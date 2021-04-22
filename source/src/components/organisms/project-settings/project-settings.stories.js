// @packages
import React from 'react';

// @scripts
import ProjectSettings from '.';

export default {
    title: 'Project Settings Modal',
    component: ProjectSettings
};

const Template = (args) => <ProjectSettings {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    id: 'project settings 1',
};

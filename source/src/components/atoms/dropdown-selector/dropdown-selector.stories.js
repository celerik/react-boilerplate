// @packages
import React from 'react';

// @scripts
import DropdownSelector from '.';

export default {
    title: 'Action Bar',
    component: DropdownSelector
};

const Template = (args) => <DropdownSelector {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    id: 'DropdownSelector 1',
    items: [{ value: 'element2', label: 'test1', icon: 'visibility' }, { value: 'element1', label: 'test2', icon: 'visibility' }],
    user: { value: 'element2', label: 'test1', icon: 'visibility' },
};

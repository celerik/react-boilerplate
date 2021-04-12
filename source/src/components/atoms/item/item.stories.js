// @packages
import React from 'react';

// @scripts
import Item from '.';

export default {
    title: 'Item Element',
    component: Item
};

const Template = (args) => <Item {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    id: 'Item 1',
    iconButtons: [{ icon: 'content_copy' }, { icon: 'east' }],
    text: 'Project Name'
};

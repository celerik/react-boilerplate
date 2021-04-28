// @packages
import React from 'react';

// @scripts
import FormDays from '.';

export default {
    title: 'FormDays Element',
    component: FormDays
};

const Template = (args) => <FormDays {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    id: 'FormDays 1',
    days: ['Mon','Sun'],
};

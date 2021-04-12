// @packages
import React from 'react';

// @scripts
import InputField from '.';

export default {
    title: 'InputField',
    component: InputField
};

const Template = (args) => <InputField {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    id: 'InputField1',
    label: 'Testing',
    onClick: Function.prototype,
    variant: 'outlined',
    size: 'small',
    value: 'INPUT FIELD'
};

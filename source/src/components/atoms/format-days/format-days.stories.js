// @packages
import React from 'react';

// @scripts
import FormatDaysOperation from '.';

export default {
    title: 'FormDays Element',
    component: FormatDaysOperation
};

const Template = (args) => <FormatDaysOperation {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    id: 'FormatDaysOperation 1',
    days: ['Mon','Sun'],
};

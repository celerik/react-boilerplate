// @packages
import React from 'react';

// @scripts
import ModalDays from '.';

export default {
    title: 'Modal - Days',
    component: ModalDays
};

const Template = (args) => <ModalDays {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    id: 'days-of-week',
    days: ['mon', 'wed', 'sun'],
    onConfirm: (items) => console.log(items),
    onClose: Function.prototype,
    open: true
};

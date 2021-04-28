// @packages
import React from 'react';

// @script
import ModalActions from '.';

export default {
    component: ModalActions,
    title: 'Actions Stop'
};

const HistoryListTemplate = (args) => <ModalActions {...args} />

export const FirstStory = HistoryListTemplate.bind({});

FirstStory.args = {
    actions: [{
        name: 'test',
        icon: 'add',
        onClick: Function.prototype
    }],
    defaultColor: 'black',
    id: 'modal-action',
}
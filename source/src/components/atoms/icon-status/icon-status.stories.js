// @packages
import React from 'react';

// @script
import IconStatus from '.';

const IconStatusTemplate = (args) => <IconStatus {...args} />

export const FirstStory = IconStatusTemplate.bind({});

FirstStory.args = {
    status: 'success'
}
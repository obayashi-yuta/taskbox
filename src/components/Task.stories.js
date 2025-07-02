import Task from './Task.svelte';

import { action } from '@storybook/addon-actions';

export const actionsData = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
};

export default {
    component: Task,
    title: 'Task',
    tags: ['autodocs'],
    excludeStories: /.*Data$/,
    render: (args) => ({
        Component: Task,
        props: args,
        on: {
            ...actionsData,
        },
    }),
};

export const Default = {
    args: {
        task: {
            id: "1",
            title: "Test Task",
            state: "TASK_INBOX",
        },
    },
};

export const Pinned = {
    args: {
        task: {
            ...Default.args.task,
            state: "TASK_PINNED",
        },
    },
};

export const Archived = {
    args: {
        task: {
            ...Default.args.task,
            state: "TASK_ARCHIVED",
        },
    },
};

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle = {
    args: {
        task: {
            ...Default.args.task,
            title: longTitleString,
        },
    },
};
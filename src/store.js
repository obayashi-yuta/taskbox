import { writable } from "svelte/store";

const defaultTasks = [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

const TaskBox = () => {
    // Creates a new writable store populated with some initial data
    const { subscribe, update } = writable({
        tasks: defaultTasks,
        status: 'idle',
        error: false,
    });

    return {
        subscribe,
        archiveTask: (id) =>
            update((store) => {
                const filteredTasks = store.tasks
                    .map((task) =>
                        task.id === id ? { ...task, state: 'TASK_ARCHIVED' } : task
                )
                .filter((t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED');
            return { ...store, tasks: filteredTasks };
            }),
        pinTask: (id) => {
            update((store) => {
                const task = store.tasks.find((t) => t.id === id);
                if (task) {
                    task.state = 'TASK_PINNED';
                }
                return store;
            });
        },
    };
};
export const taskStore = TaskBox();
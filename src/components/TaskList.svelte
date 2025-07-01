<script>
    import Task from './Task.svelte';
    import LoadingRow from './LoadingRow.svelte';

    // Sets the loading state
    export let loading = false;

    // Defines a list of tasks
    export let tasks = [];

    // Reactive declaration
    $: noTasks = tasks.length === 0;
    $: emptyTasks = noTasks && !loading;
    $: tasksInorder = [
        ...tasks.filter((t) => t.state === 'TASK_PINNED'),
        ...tasks.filter((t) => t.state !== 'TASK_PINNED')
    ];
</script>

{#if loading}
    <div class="list-items">
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
    </div>
{/if}
{#if emptyTasks}
    <div class="list-items">
        <div class="wrapper-message">
            <span class="icon-check" />
            <p class="title-message">You have no tasks</p>
            <p class="subtitle-message">Sit back and relax</p>
        </div>
    </div>
{/if}
{#each tasks as task}
    <Task {task} on:onPinTask on:onArchiveTask />
{/each}
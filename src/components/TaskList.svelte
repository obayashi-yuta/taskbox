<script>
    import Task from './Task.svelte';

    // Sets the loading state
    export let loading = false;

    // Defines a list of tasks
    export let tasks = [];

    // Reactive declaration
    $: noTasks = tasks.length === 0;
    $: emptyTasks = noTasks && !loading;
</script>

{#if loading}
    <div class="list-items">loading</div>
{/if}
{#if emptyTasks}
    <div class="list-items">empty</div>
{/if}
{#each tasks as task}
    <Task {task} on:onPinTask on:onArchiveTask />
{/each}
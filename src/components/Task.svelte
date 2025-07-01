<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    // Event handler for the Pin Task
    function PinTask() {
        dispatch('onPinTask', {
            id: task.id,
        });
    }

    // Event handler for the Archive Task
    function ArchiveTask() {
        dispatch('onArchiveTask', {
            id: task.id,
        });
    }

    // Composition of the task
    export let task = {
        id: '',
        title: '',
        state: '',
    };
</script>

<div class="list-item">
    <label for="title" aria-label={task.title}>
        <input type="text" value={task.title} name="title" readonly />
    </label>
</div>
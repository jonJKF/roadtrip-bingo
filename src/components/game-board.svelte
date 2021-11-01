<script>
import { collectables } from "../stores/collectables";
</script>

<div class="container mx-auto w-auto" style="width: 662px;">
    <h1 class="my-10 text-5xl text-primary bold text-center drop-shadow-lg">Road Trip Bingo - Have Fun!</h1>
    <div class="grid grid-cols-5 grid-rows-5 gap-1">
        {#each $collectables as task (task.guid)}
            <div
            class="
            text-center
            align-middle
            h-32
            w-32
            p-2

            cursor-pointer
            drop-shadow-lg
            transition-colors
            border
            {task.completed ? 'bg-primary-focus' : 'bg-secondary-focus'}"
            on:click="{() => task.completed = !task.completed}"         
            >Task: {task.description}</div>
        {:else}
        <div class="btn btn-xl btn-outline btn-primary loading">loading...</div> 
        {/each}
    </div>
</div>
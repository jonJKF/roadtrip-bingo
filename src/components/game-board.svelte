<script>
	import { collectables } from '../stores/collectables';

	let gameOver = false;

	function toggleItem(i) {
		$collectables[i].completed = !$collectables[i].completed;

		//Check Columns
		const combinations = [
			//rows
			[0, 1, 2, 3, 4],
			[5, 6, 7, 8, 9],
			[10, 11, 12, 13, 14],
			[15, 16, 17, 18, 19],
			[20, 21, 22, 23, 24],
			//columns
			[0, 5, 10, 15, 20],
			[1, 6, 11, 16, 21],
			[2, 7, 12, 17, 22],
			[3, 8, 13, 18, 23],
			[4, 9, 14, 19, 24],
			//diagonals
			[0, 6, 12, 18, 24],
			[20, 16, 12, 8, 4]
		];
		for (let j = 0; j < combinations.length; j++) {
			let lineCompleted = 1;
			for (let k = 0; k < combinations[j].length; k++) {
				lineCompleted = lineCompleted && $collectables[combinations[j][k]].completed;
			}
			if (lineCompleted) {
				console.log('Bingo!');
				gameOver = true;
				break;
			}
		}
	}

	function resetGame() {
		window.location.reload();
	}

	function hideModal() {
		gameOver = false;
	}
</script>

<div class="container mx-auto w-auto" style="width: 662px;">
	<h1 class="my-10 text-5xl text-primary bold text-center drop-shadow-lg">
		Road Trip Bingo - Have Fun!
	</h1>
	<div class="grid grid-cols-5 grid-rows-5 gap-1">
		{#each $collectables as task, i (task.id)}
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
				on:click={() => toggleItem(i)}
			>
				{task.description}
			</div>
		{:else}
			<div class="btn btn-xl btn-outline btn-primary loading">loading...</div>
		{/each}
	</div>
</div>

<div class="modal {gameOver && 'modal-open'}">
	<div class="modal-box">
		<h1 class="text-2xl py-5">Bingo!</h1>
		<p>Well done - you've completed the game!</p>
		<div class="modal-action">
			<label for="my-modal-2" class="btn btn-primary" on:click={resetGame}>New Game</label>
			<label for="my-modal-2" class="btn" on:click={hideModal}>Close</label>
		</div>
	</div>
</div>

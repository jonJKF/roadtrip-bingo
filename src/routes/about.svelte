<svelte:head><title>About - Road Trip Bingo!</title></svelte:head>
<article class="prose lg:prose-xl m-10 p-10 bg-neutral">
	<h1>About</h1>
	<p>This project is a last-minute submission to Cloudflare's 2021 Summer Developer Challenge!</p>
	<p>
		It is based on a simplified version of an idea my sister and I came up with many years ago for
		entertaining kids in a car or on a train, that had since been forgotten until she reminded me
		while brainstorming ideas for a fun project to enter in the Developer Challenge!
	</p>
	<p>
		It also served as an opportunity to try out <a href="https://kit.svelte.dev/"
			>Svelte &amp; Svelte Kit</a
		>, <a href="https://vitejs.dev/">Vite</a> and <a href="https://tailwindcss.com/">TailwindCSS</a>
		with its new JIT compiler.
	</p>
	<p>The Cloudflare technologies in use are:</p>
	<ul>
		<li><a href="https://pages.cloudflare.com/">Cloudflare Pages</a> to host this site.</li>
		<li>
			<a href="https://workers.cloudflare.com/">Cloudflare Workers</a> for the super-fast API to load
			the game data
		</li>
		<li>
			<a href="https://www.cloudflare.com/products/workers-kv/">Cloudflare Workers KV</a> to store all
			the "collectable" options to go on the board
		</li>
		<li>
			<del
				><a href="https://developers.cloudflare.com/workers/runtime-apis/durable-objects"
					>Durable Objects</a
				> for the game sessions</del
			>
		</li>
	</ul>
	<p>Source code is hosted on github:</p>
	<p>
		App: <a href="https://github.com/jonJKF/roadtrip-bingo"
			>https://github.com/jonJKF/roadtrip-bingo</a
		>
	</p>
	<p>
		API: <a href="https://github.com/jonJKF/roadtrip-bingo-api"
			>https://github.com/jonJKF/roadtrip-bingo-api</a
		>
	</p>
</article>

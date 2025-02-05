<script lang="ts">
	import { images } from '$lib';

	const locations = [...new Set(images.map((image) => image.location))];
</script>

<main>
	<pre>
		{JSON.stringify(locations, null, 2)}
	</pre>

	{#each locations as location}
		<a href={`/photos/${location}`} style="background:lightblue;display:block;">{location}</a>
		<br />
	{/each}
	<br />

	<h2 style="background:lightblue;">Mexico</h2>
	<br />
	<h2 style="background:lightblue;">Spain</h2>
	<!-- Photo Grid -->
	<div class="grid-container">
		<!-- <img alt="Beatle" src={Beatle} />
		<img alt="Man" src={Man} /> -->
		{#each images as image}
			<img src={image.path} alt="" srcset="" />
		{/each}
	</div>
</main>

<style>
	img {
		max-width: 100%;
		height: auto;
		border-radius: 3px;
	}

	.grid-container {
		display: grid;
		gap: 24px;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		justify-items: center;
		align-items: center;
	}

	.grid-container {
		column-width: 240px;
	}

	main {
		padding: 16px;
	}
</style>

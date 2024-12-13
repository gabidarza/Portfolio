<script lang="ts">
	import { error } from '@sveltejs/kit';

	const { data } = $props();

	if (!data.images) {
		error(404, 'Images not found');
	}
</script>

<div class="images-container">
	{#each data.images as image}
		<a href={`../photos/${image.location}/${image.fileName}`}>
			<img src={image.path} alt={image.fileName} />
		</a>
	{/each}
</div>

<style>
	.images-container {
		columns: 2;
		column-gap: 24px;
	}

	a {
		display: flex;
		padding: 12px 0;
	}

	img {
		width: 100%;
		height: auto;
		margin: 0;
	}
</style>

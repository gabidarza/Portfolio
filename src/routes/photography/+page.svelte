<script lang="ts">
	import { images, checkIfImageInLocation, type Image } from '$lib';

	import { error } from '@sveltejs/kit';

	const photographyFolders = ['mexico', 'spain', 'turkey'];

	function checkIfImageIsPhotography(image: Image) {
		return checkIfImageInLocation(image, photographyFolders);
	}

	const locationImages = images.filter(checkIfImageIsPhotography);

	const locationsToDisplay: {
		location: string;
		images: Image[];
	}[] = [];

	for (const location of photographyFolders) {
		locationsToDisplay.push({
			location,
			images: images.filter((image) => checkIfImageInLocation(image, [location]))
		});
	}

	if (locationImages.length === 0) {
		error(404, {
			message: 'Not found'
		});
	}
</script>

<main>
	<div class="grid-container">
		{#each locationsToDisplay as location}
			{#if location.images[0]}
				<div>
					<h2>{location.location}</h2>
					<img
						src={location.images[0].path}
						alt={location.images[0].fileName}
						class="category-image"
					/>
				</div>
			{/if}
		{/each}
	</div>
</main>

<!--
{#each images as image }
		<img src={image.path} alt={image.alt} class="category-image" />
	{/each}
	-->

<style>
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

	img {
		max-width: 100%;
		height: auto;
		border-radius: 3px;
	}
</style>

<script lang="ts">
	import { images } from '$lib';

	const locations = [...new Set(images.map((image) => image.location))];
</script>

<h1>Photos</h1>

{#each locations as location}
	<a href={`photos/${location}`}>
		<h2>{location}</h2>
	</a>
{/each}

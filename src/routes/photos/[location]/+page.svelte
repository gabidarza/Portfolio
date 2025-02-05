<script lang="ts">
	import { page } from '$app/stores';
	import { images } from '$lib';

	const location = $page.params.location;

	const imagesInLocation = images.filter((image) => image.location === location);
</script>

<h1>Photos for {location}</h1>

<ul>
	{#each imagesInLocation as image}
		<li>
			<img src={image.path} alt="" style="width: 100px; height: 100px" />
		</li>
	{/each}
</ul>

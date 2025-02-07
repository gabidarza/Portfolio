<script lang="ts">
	import {images} from '$lib';
	
type Image = (typeof images)[number]

function checkIfImageInMexico(image: Image):boolean {
	
console.log(image)
return true;
}

const imagesInMexico = images.filter(checkIfImageInMexico)

console.log(imagesInMexico)

</script>
    

<main>
	<div class="grid-container">
		{#each images as image }
		<img src={image.path} alt={image.alt} class="category-image" />
	{/each}
	</div>
</main>

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

<!--
{#each images as image }
		<img src={image.path} alt={image.alt} class="category-image" />
	{/each}
	-->
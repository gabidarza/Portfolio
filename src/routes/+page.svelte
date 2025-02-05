<script lang="ts">
	import {images} from '$lib'
</script>

<main>
	<!-- Photo Grid -->
	<div class="grid-container">
		<!-- <img alt="Beatle" src={Beatle} />
		<img alt="Man" src={Man} /> -->
	{#each images as image }
		<img src={image.path} alt="" srcset="">
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
		grid-template-columns: repeat( auto-fit, minmax(400px, 1fr) );
		justify-items: center;
		align-items: center;

        
    } 

	.grid-container {
		column-width: 240px;
	}

	main {
		padding: 16px;
	}
	nav {
		background-color: rgba(255, 255, 255, 0.75);
		backdrop-filter: blur(16px);
		color: black;
		display: flex;
		justify-content: space-between;
		padding: 16px;
		position: sticky;
		top: 0;
		left: 0;
		right: 0;

		a {
			color: black;
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>

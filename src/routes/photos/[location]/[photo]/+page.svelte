<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { error } from '@sveltejs/kit';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import { fly, scale } from 'svelte/transition';

	const { data } = $props();

	if (!data.image) {
		error(404, 'Image not found');
	}

	let direction: 'forward' | 'backward' = $state('forward');

	beforeNavigate((e) => {
		if (e.to?.params?.photo === data.nextImage?.fileName) {
			direction = 'forward';
		} else {
			direction = 'backward';
		}
	});
</script>

<div in:scale>
	<div class="buttons-container">
		{#if data.prevImage}
			<a class="icon-button" href={`../${data.image?.location}/${data.prevImage.fileName}`}>
				<ChevronLeft />
				<!-- Previous -->
			</a>
		{:else}
			<p class="icon-button">
				<ChevronLeft />
				<!-- Previous -->
			</p>
		{/if}

		{#if data.nextImage}
			<a class="icon-button" href={`../${data.image.location}/${data.nextImage.fileName}`}>
				<ChevronRight />
				<!-- Next -->
			</a>
		{:else}
			<p class="icon-button">
				<ChevronRight />
				<!-- Next -->
			</p>
		{/if}
	</div>
	<div class="image-container">
		{#key data.image.path}
			<img
				in:fly={{ x: direction === 'forward' ? 400 : -400 }}
				out:fly={{ x: direction === 'forward' ? -400 : 400 }}
				width="200"
				height="auto"
				src={data.image?.path}
				alt={data.image?.fileName}
			/>
		{/key}
	</div>
</div>

<style>
	.image-container {
		display: grid;
		grid-template-areas: stack;

		img {
			grid-area: stack;
		}
	}

	.icon-button {
		width: 44px;
		height: 44px;
		border-radius: 12px;
		background-color: lightgray;
		color: darkslategrey;
		margin: 0;
		padding: 0;
		appearance: none;
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 0.8;

		&:hover {
			opacity: 1;
		}
	}

	p.icon-button {
		cursor: not-allowed;
		opacity: 0.25;
		pointer-events: none;
	}

	.buttons-container {
		display: flex;
		justify-content: space-between;
	}
</style>

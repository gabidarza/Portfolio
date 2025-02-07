<script lang="ts">
	import { images } from '$lib';

	const availableLocations = [...new Set(images.map((image) => image.location))];

	const categories = [
		{
			title: 'PHOTOGRAPHY',
			subtitle: 'Film | Canon AE-1, Olympus Mju',
			description: 'Street, Landscape, & Studio',
			image: '/images/MEXICO/000068470027 .jpeg',
			alt: 'Vintage car photograph showing artistic perspective',
			href: '/mexico'
		},
		{
			title: 'FINE ART',
			subtitle: 'Mix | Paint, Pencil, Pen, Watercolor',
			description: 'People, Places, & whatever feels right',
			image: '/images/ART/lighter.png',
			alt: 'Black and white sketch of a lighter',
			href: '/art'
		},
		{
			title: 'DESIGN',
			subtitle: 'Mix | Adobe CC, Procreate, Figma',
			description: 'Branding, Graphic Design, & UX/UI',
			image: '/images/DESIGN/guitar.jpg',
			alt: 'Stylized guitar head silhouette',
			href: '/design'
		},
		{
			title: 'Spain',
			subtitle: 'Mix | Adobe CC, Procreate, Figma',
			description: 'Branding, Graphic Design, & UX/UI',
			image: '/images/DESIGN/guitar.jpg',
			alt: 'Stylized guitar head silhouette',
			href: '/spain'
		}
	];

	const categoriesToUse = categories.map((category) => {
		const overlap = availableLocations.find((location) => category.href === `/${location}`);

		if (overlap?.length && overlap.length > 0) {
			return category;
		} else {
			console.warn('Missing location data');
		}
	});
</script>

<section>
	<div class="portfolio-grid">
		{#each categoriesToUse as category}
			{#if category}
				<a
					href={category.href}
					class="category-link"
					aria-label="View {category.title.toLowerCase()} portfolio"
				>
					<div class="category-card">
						<div class="image-container">
							<img src={category.image} alt={category.alt} class="category-image" />
						</div>
						<div class="category-content">
							<h2 class="category-title">{category.title}</h2>
							<p class="category-subtitle">{category.subtitle}</p>
							<p class="category-description">{category.description}</p>
						</div>
					</div>
				</a>
			{/if}
		{/each}
	</div>
</section>

<style>
	section {
		align-content: center;
	}
	.portfolio-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		padding: 2rem;
		max-width: 100%;
		margin: 0 auto;
		@media (max-width: 1080px) {
			grid-template-columns: 1fr;
		}
		a {
			text-decoration: none;
		}
	}

	.category-card {
		border-radius: 1rem;
		overflow: hidden;
		background: #fff;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;

		&:hover {
			text-decoration: underline;
		}
	}

	.category-card:hover {
		transform: translateY(-5px);
	}

	.image-container {
		aspect-ratio: 16/9;
		overflow: hidden;
	}

	.category-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.category-card:hover .category-image {
		transform: scale(1.05);
	}

	.category-content {
		padding: 1.5rem;
	}

	.category-title {
		font-size: 1.5rem;
		font-weight: 700;
		margin: 0;
		color: #333;
	}

	.category-subtitle {
		font-size: 0.9rem;
		color: #666;
		margin: 0.5rem 0;
	}

	.category-description {
		font-size: 0.9rem;
		color: #888;
		margin: 0;
	}

	@media (max-width: 768px) {
		.portfolio-grid {
			padding: 1rem;
			gap: 1rem;
		}
	}

	img {
		max-width: 100%;
		height: auto;
		border-radius: 3px;
	}
</style>

import { images } from '$lib';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { location } = params;

	const imagesToShow = images.filter((img) => img.location === location);

	if (imagesToShow.length === 0) {
		return {
			status: 404,
			error: new Error(`Image not found`)
		};
	}

	return {
		images: imagesToShow
	};
};

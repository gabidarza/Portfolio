import { images } from '$lib';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	console.log(params);

	const { location, photo } = params;

	const imageToShow = images.find((img) => img.fileName === photo && img.location === location);

	if (!imageToShow) {
		return {
			status: 404,
			error: new Error(`Image not found`)
		};
	}

	const imagesInLocation = images.filter((img) => img.location === location);

	const prevImage = imagesInLocation[imagesInLocation.indexOf(imageToShow) - 1];
	const nextImage = imagesInLocation[imagesInLocation.indexOf(imageToShow) + 1];

	return {
		image: imageToShow,
		prevImage,
		nextImage
	};
};

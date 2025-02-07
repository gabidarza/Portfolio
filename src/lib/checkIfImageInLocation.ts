import { images } from '$lib';

export type Image = (typeof images)[number];

function checkIfImageInLocation(image: Image, locations: string[]): boolean {
	function locationsMatch(location: string) {
		return location === image.location;
	}

	const matchingLocations = locations.filter(locationsMatch);

	if (matchingLocations.length > 0) {
		return true;
	} else {
		return false;
	}
}

export { checkIfImageInLocation };

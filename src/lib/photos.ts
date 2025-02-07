// src/lib/photos.ts

const imageModules = import.meta.glob('../../static/images/*/*.{jpg,png,JPG,PNG,jpeg,JPEG}');

/* 

const							imageModules						= 					import.meta.glob (etc)
^								^									^					^
constant (cant be reassigned)	what we're calling the constant		assign operation	value we're assigning to it
*/

// LOCATION/FILENAME.PNG
// CATEGORY/LOCATION/FILENAME.PNG

const rawImages: {
	location: string;
	fileName: string;
	path: string;
}[] = [];

for (const module in imageModules) {
	const cleanPath = module.replace('../../static/images/', '');

	const cleanPathSplit = cleanPath.split('/');

	console.log(cleanPath);

	rawImages.push({
		location: cleanPathSplit[0]?.toLowerCase(),
		fileName: cleanPathSplit[1]?.toLowerCase(),
		path: module.replace('../../static', '')
	});
}

export const images = rawImages.sort((a, b) => {
	if (a.location === b.location) {
		if (b.fileName.split('-').length === 1) {
			return -1;
		}

		if (a.fileName.split('-')[0] > b.fileName.split('-')[0]) return 1;
		if (a.fileName.split('-')[0] < b.fileName.split('-')[0]) return -1;
	}
	return 0;
});

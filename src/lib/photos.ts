// src/lib/photos.ts

const imageModules = import.meta.glob('../../static/images/**/*.{jpg,png,JPG,PNG,jpeg,JPEG}');

const rawImages: {
	location: string;
	fileName: string;
	path: string;
}[] = [];

for (const module in imageModules) {
	const cleanPath = module.replace('../../static/images/', '');

	rawImages.push({
		location: cleanPath.split('/')[0].toLowerCase(),
		fileName: cleanPath.split('/')[1].toLowerCase(),
		path: module.replace('../../static', '')
	});
}

export const images = rawImages.sort((a, b) => {
	if (a.location === b.location) {
		if (a.fileName.split('-')[0] > b.fileName.split('-')[0]) return 1;
		if (a.fileName.split('-')[0] < b.fileName.split('-')[0]) return -1;
	}
	return 0;
});

// src/lib/photos.ts

const imageModules = import.meta.glob('../../static/images/*/*.{jpg,png,JPG,PNG,jpeg,JPEG}');


/* 

const							imageModules						= 					import.meta.glob (etc)
^								^									^					^
constant (cant be reassigned)	what we're calling the constant		assign operation	value we're assigning to it
*/

const rawImages: 
{
	location: string;
	fileName: string;
	path: string;
}[] = [];

for (const module in imageModules) {
	const cleanPath = module.replace('../../static/images/', '');

	const cleanPathSplit = cleanPath.split('/')

	rawImages.push({
		location: cleanPathSplit[0]?.toLowerCase(),
		fileName: cleanPathSplit[1]?.toLowerCase(),
		path: module.replace('../../static', '')
	});
}

export const images = rawImages.sort((a, b) => {
	if (a.location === b.location) {


		if (b.fileName.split('-').length === 1) {
			return -1
		}

		if (a.fileName.split('-')[0] > b.fileName.split('-')[0]) return 1;
		if (a.fileName.split('-')[0] < b.fileName.split('-')[0]) return -1;
	}
	return 0;
});




/* Notes 30 Jan 2025 */


var gabiOutfit = "scarf and sweater"

gabiOutfit = "jeans and shirt"

const gabiName = "Gabi Darza"

/* gabiName = "Gabi Darza" CANNOT BE REASSIGNED */

function toLowercase(val: string) {
	return val.toLowerCase()
}

const toLowercase2 = (val: string) => {
	return val.toLowerCase()
}

/* 

1. number

 */

const num: number = 1;

/* 

2. string
 */

const str: string = "1";

/* 

3. array

 */

const arrNum: number[] = [1, 2, 3]

const arrStr: string[] = ['1', '2', '3']

const seasons = [	'winter', 	'fall', 	'summer', 	'spring']
/* 					^ 0			^ 1		 	^ 2 		^3			*/
/* 

4. object

 */

const gabiObj = {
	firstName: "Gabi",
	lastName: "Darza",
	age: "26",
	location: "SF",
	favoriteSeason: seasons[2]
}

/* 

*/
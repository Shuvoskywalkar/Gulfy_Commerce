
export const IMAGE_URL = 'https://source.unsplash.com/random/';


export function createSlides( length = 10, sig = 0 ) {
	return Array.apply( null, Array( length ) ).map( ( value, index ) => {
		index = sig || index;

		return {
			src: `${ IMAGE_URL }?sig=${ index }`,
			alt: `Image ${ index }`,
		};
	} );
}
"use strict";

/** 
 * @link https://www.npmjs.com/package/color 
*/
const Color = require( 'color' );

/**
 * @description Convert a RGBA[r, g, b, a] with a given accessability filter in HEX.
 * 
 * @param   { array } filter - Accessibility filter matrix ( e.g deuteranopia[0,1,0,0,0,1 ... 19] )
 * @param   { array } colour - Colour description of any format ( RGBA, String, HEX, HSL etc )
 * 
 * @return  { array } Multiply - The VALIDATED filter array and colour array together.
 */
const Convert = ( filter, colour ) => {
    // Check if filter lengths are valid
    if ( filter.length <= 0 || filter.length !== 20 ) {
        throw new Error( "ERROR: Invalid Filter!" );
    }

    // Convert colour value to RGB array
    var rgbArray = Color( colour ).rgb().array()
    
    // Check array length for alpha value.
    if ( rgbArray.length < 4 ) {
        rgbArray.push( 1 )  //Default the alpha channel to 1
    } 
    
    return ApplyColorFilter( filter, rgbArray )
}

/**
 * @description - Multiply a filter matrix[20] with a RGBA[4] colour.
 * @link https://developer.android.com/reference/android/graphics/ColorMatrix.html

 * @param { array } filter - Accessibility filter matrix ( e.g deuteranopia[20] )
 * @param { array } colour - RGBA[4] colour ( e.g red = [255,0,0,0.5] )
 * 
 * @return { array } result - Product of the ( filter * colour) in HEX ( e.g [159, 179, 0, 0.5] ) 
 */
const ApplyColorFilter = ( filter, colour ) => {
    // Assign variable to filter array
    var result = filter.slice()

    // Iterate through the filter values 
    for ( let i = 0; i < 4; i++ ) {
        // Assign row length to filter length * RGBA array length * index
        let row = filter.length / 4 * i;
        
        // Sum resulting array index values to index value
        result[i] = 
            ( colour[ 0 ] * result[ row + 0 ] )     // Red
            + ( colour[ 1 ] * result[ row + 1 ] )   // Green
            + ( colour[ 2 ] * result[ row + 2 ] )   // Blue
            + ( colour[ 3 ] * result[ row + 3 ] )   // Alpha
            result[ row + 4 ]                       // E (Used for smoothing)
    }    

    // Return converted RGBA array to HEX value
    return Color(
        new Array(
             result[ 0 ],        // Red
             result[ 1 ],        // Green
             result[ 2 ],        // Blue
             result[ 3 ]         // Alpha
        )
    ).hex()
}

module.exports = Convert
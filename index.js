"use strict";

/** @link https://www.npmjs.com/package/color */
const Color = require('color');

/**
 * @description Convert a RGBA[4] with an accessability filter.
 * @param filter Accessibility filter matrix (e.g deuteranopia[20])
 * @param colour Colour description of any format (RGBA, String, HEX, HSL etc)
 */
function Convert(filter, colour) {
    if (filter.length <= 0 || filter.length !== 20) { 
        throw "ERROR: Invalid Filter!"; 
    }

    var col = Color(colour).rgb().array()

    if (col.length < 4 ){ 
        col.push(1)                 //Default alpha channel to 1
    } else{
        Color(col).alpha(col[3])   
    }
    
    return Multiplty(filter, col)
}

/**
 * @description Multiply a filter matrix[20] with a RGBA[4] colour.
 * @param filter Accessibility filter matrix (e.g deuteranopia[20])
 * @param colour RGBA[4] colour (e.g red = [255,0,0,0.5])
 * @link https://developer.android.com/reference/android/graphics/ColorMatrix.html
 * @returns Product of the (filter * colour) in RGBA (e.g [159, 179, 0, 0.5])
 */
function Multiplty(filter, colour) {
    var result = filter.slice()
    var row = 0

    for (let i = 0; i < 4; i++) {
		row = filter.length / 4 * i;
        result[i] = (colour[0] * result[row + 0]) 
        + (colour[1] * result[row + 1]) 
        + (colour[2] * result[row + 2]) 
        + (colour[3] * result[row + 3]) 
        + result[row + 4];
    }

    return new Array(
        Math.round(result[0], 0, 255),  //R
        Math.round(result[1], 0, 255),  //G
        Math.round(result[2], 0, 255),  //B
        result[3]                       //A
    );
}

module.exports = Convert
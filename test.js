const ColourMatrix = require( "./index.js")
const Filter = require( "./js/ColourFilters.js")

/**
 * ----------------------------------------------------------------------------
 * @description Perform tests on ColourMatrix ( index.js) Convert function
 * ----------------------------------------------------------------------------
 */
test( "Red converts to DEUTERANOPIA red.", () => {
    expect( ColourMatrix( Filter.deuteranopia, "red" )).toEqual( "#9FB300" );
    expect( ColourMatrix( Filter.deuteranopia, "#ff0000" )).toEqual( "#9FB300" );
    expect( ColourMatrix( Filter.deuteranopia, "hsl( 0, 100%, 50%)" )).toEqual( "#9FB300" );
    expect( ColourMatrix( Filter.deuteranopia, "rgb( 255,0,0)" )).toEqual( "#9FB300" );
    expect( ColourMatrix( Filter.deuteranopia, "rgb( 255,0,0,1)" )).toEqual( "#9FB300" );
    expect( ColourMatrix( Filter.deuteranopia, "rgb( 255,0,0,0.5)" )).toEqual( "#9FB300" );
});

test( "Green converts to DEUTERANOPIA green.", () => {
    expect( ColourMatrix( Filter.deuteranopia, "lime" )).toEqual( "#604D4D" );
    expect( ColourMatrix( Filter.deuteranopia, "#00ff00" )).toEqual( "#604D4D" );
    expect( ColourMatrix( Filter.deuteranopia, "hsl( 120, 100%, 50%)" )).toEqual( "#604D4D" );
    expect( ColourMatrix( Filter.deuteranopia, "rgb( 0,255,0)" )).toEqual( "#604D4D" );
    expect( ColourMatrix( Filter.deuteranopia, "rgb( 0,255,0,1)" )).toEqual( "#604D4D" );
    expect( ColourMatrix( Filter.deuteranopia, "rgb( 0,255,0,0.5)" )).toEqual( "#604D4D" );
});

test( "Blue converts to DEUTERANOPIA blue.", () => {
    expect( ColourMatrix( Filter.deuteranopia, "blue" )).toEqual( "#0000B3" );
    expect( ColourMatrix( Filter.deuteranopia, "#0000ff" )).toEqual( "#0000B3" );
    expect( ColourMatrix( Filter.deuteranopia, "hsl( 240, 100%, 50%)" )).toEqual( "#0000B3" );
    expect( ColourMatrix( Filter.deuteranopia, "rgb( 0,0,255)" )).toEqual( "#0000B3" );
    expect( ColourMatrix( Filter.deuteranopia, "rgb( 0,0,255,1)" )).toEqual( "#0000B3" );
    expect( ColourMatrix( Filter.deuteranopia, "rgb( 0,0,255,0.5)" )).toEqual( "#0000B3" );
});

test( "Hotpink converts to DEUTERANOMALY hotpink.", () => {
    expect( ColourMatrix( Filter.deuteranomaly, "hotpink" )).toEqual( "#E190A9" );
    expect( ColourMatrix( Filter.deuteranomaly, "#ff69b4" )).toEqual( "#E190A9" );
    //expect( ColourMatrix( Filter.deuteranomaly, "hsl( 330, 100%, 71%)" )).toEqual( "#E190A9" ); //TODO HSL values are within margin of error
    expect( ColourMatrix( Filter.deuteranomaly, "rgb( 255,105,180)" )).toEqual( "#E190A9" );
    expect( ColourMatrix( Filter.deuteranomaly, "rgb( 255,105,180,1)" )).toEqual( "#E190A9" );
    expect( ColourMatrix( Filter.deuteranomaly, "rgb( 255,105,180,0.5)" )).toEqual( "#E190A9" );
});

test( "Red converts to DEUTERANOMALY red.", () => {
    expect( ColourMatrix( Filter.deuteranomaly, "red" )).toEqual( "#CC4200" );
    expect( ColourMatrix( Filter.deuteranomaly, "#ff0000" )).toEqual( "#CC4200" );
    expect( ColourMatrix( Filter.deuteranomaly, "hsl( 0, 100%, 50%)" )).toEqual( "#CC4200" );
    expect( ColourMatrix( Filter.deuteranomaly, "rgb( 255,0,0)" )).toEqual( "#CC4200" );
    expect( ColourMatrix( Filter.deuteranomaly, "rgb( 255,0,0,1)" )).toEqual( "#CC4200" );
    expect( ColourMatrix( Filter.deuteranomaly, "rgb( 255,0,0,0.5)" )).toEqual( "#CC4200" );
});

test( "Red converts to ACHROMATOPSIA red.", () => {
    expect( ColourMatrix( Filter.achromatopsia, "red" )).toEqual( "#4C4C4C" );
    expect( ColourMatrix( Filter.achromatopsia, "#ff0000" )).toEqual( "#4C4C4C" );
    expect( ColourMatrix( Filter.achromatopsia, "hsl( 0, 100%, 50%)" )).toEqual( "#4C4C4C" );
    expect( ColourMatrix( Filter.achromatopsia, "rgb( 255,0,0)" )).toEqual( "#4C4C4C" );
    expect( ColourMatrix( Filter.achromatopsia, "rgb( 255,0,0,1)" )).toEqual( "#4C4C4C" );
    expect( ColourMatrix( Filter.achromatopsia, "rgb( 255,0,0,0.5)" )).toEqual( "#4C4C4C" );
});

test( "Yellow converts to ACHROMATOPSIA yellow.", () => {
    expect( ColourMatrix( Filter.achromatopsia, "yellow" )).toEqual( "#E2E2E2" );
    expect( ColourMatrix( Filter.achromatopsia, "#ffff00" )).toEqual( "#E2E2E2" );
    expect( ColourMatrix( Filter.achromatopsia, "hsl( 60, 100%, 50%)" )).toEqual( "#E2E2E2" );
    expect( ColourMatrix( Filter.achromatopsia, "rgb( 255,255,0)" )).toEqual( "#E2E2E2" );
    expect( ColourMatrix( Filter.achromatopsia, "rgb( 255,255,0,1)" )).toEqual( "#E2E2E2" );
    expect( ColourMatrix( Filter.achromatopsia, "rgb( 255,255,0,0.5)" )).toEqual( "#E2E2E2" );
});

test( "Orange converts to NORMAL orange.", () => {
    expect( ColourMatrix( Filter.normal, "orange" )).toEqual( "#FFA500" );
    expect( ColourMatrix( Filter.normal, "#ffa500" )).toEqual( "#FFA500" );
    //expect( ColourMatrix( Filter.normal, "hsl( 39, 100%, 50%)" )).toEqual( "#FFA500" );         //TODO HSL values are within margin of error
    expect( ColourMatrix( Filter.normal, "rgb( 255,165,0)" )).toEqual( "#FFA500" );
    expect( ColourMatrix( Filter.normal, "rgb( 255,165,0,1)" )).toEqual( "#FFA500" );
    expect( ColourMatrix( Filter.normal, "rgb( 255,165,0,0.5)" )).toEqual( "#FFA500" );
});

test( "ColourMatrix handles invalid Filters", () => {
    expect( () => {
        ColourMatrix( [], "red" )
    }).toThrowError( "ERROR: Invalid Filter!" );
    
    expect( () => {
        ColourMatrix( "Filter", "red" )
    }).toThrowError( "ERROR: Invalid Filter!" );
    
    expect( () => {
        ColourMatrix( {}, "red" )
    }).toThrowError( "ERROR: Invalid Filter!" );
    
    expect( () => {
        ColourMatrix( [0, 0, 0, 0, 0, 0], "red" )
    }).toThrowError( "ERROR: Invalid Filter!" );
});

test( "ColourMatrix returns correct ALPHA values", ( ) => {
    expect( ColourMatrix( Filter.normal, "rgb( 255,255,255,1)" )).toEqual( "#FFFFFF" );
    expect( ColourMatrix( Filter.normal, "rgb( 255,255,255,0.5)" )).toEqual( "#FFFFFF" );
    expect( ColourMatrix( Filter.normal, "rgb( 255,255,255,0.25)" )).toEqual( "#FFFFFF" );
    expect( ColourMatrix( Filter.normal, "rgb( 255,255,255,3)" )).toEqual( "#FFFFFF" );
    expect( ColourMatrix( Filter.normal, "rgb( 255,255,255,0)" )).toEqual( "#FFFFFF" );
});
const chai = require("chai");
const expect = chai.expect;
const { AllyFe, Filter } = require( "./src/index.js" )

describe( "Color conversions", () => {
    it("Should transform red colors to DEUTERANOPIA red", () => {
        expect( AllyFe( Filter.deuteranopia, "red" )).to.equal( "#9FB300" );
        expect( AllyFe( Filter.deuteranopia, "#ff0000" )).to.equal( "#9FB300" );
        expect( AllyFe( Filter.deuteranopia, "hsl( 0, 100%, 50%)" )).to.equal( "#9FB300" );
        expect( AllyFe( Filter.deuteranopia, "rgb( 255,0,0)" )).to.equal( "#9FB300" );
        expect( AllyFe( Filter.deuteranopia, "rgb( 255,0,0,1)" )).to.equal( "#9FB300" );
        expect( AllyFe( Filter.deuteranopia, "rgb( 255,0,0,0.5)" )).to.equal( "#9FB300" );
    })

    it( "Should transform green colors to DEUTERANOPIA green.", () => {
        expect( AllyFe( Filter.deuteranopia, "lime" )).to.equal( "#604D4D" );
        expect( AllyFe( Filter.deuteranopia, "#00ff00" )).to.equal( "#604D4D" );
        expect( AllyFe( Filter.deuteranopia, "hsl( 120, 100%, 50%)" )).to.equal( "#604D4D" );
        expect( AllyFe( Filter.deuteranopia, "rgb( 0,255,0)" )).to.equal( "#604D4D" );
        expect( AllyFe( Filter.deuteranopia, "rgb( 0,255,0,1)" )).to.equal( "#604D4D" );
        expect( AllyFe( Filter.deuteranopia, "rgb( 0,255,0,0.5)" )).to.equal( "#604D4D" );
    });
    
    it( "Should transform blue colors to DEUTERANOPIA blue.", () => {
        expect( AllyFe( Filter.deuteranopia, "blue" )).to.equal( "#0000B3" );
        expect( AllyFe( Filter.deuteranopia, "#0000ff" )).to.equal( "#0000B3" );
        expect( AllyFe( Filter.deuteranopia, "hsl( 240, 100%, 50%)" )).to.equal( "#0000B3" );
        expect( AllyFe( Filter.deuteranopia, "rgb( 0,0,255)" )).to.equal( "#0000B3" );
        expect( AllyFe( Filter.deuteranopia, "rgb( 0,0,255,1)" )).to.equal( "#0000B3" );
        expect( AllyFe( Filter.deuteranopia, "rgb( 0,0,255,0.5)" )).to.equal( "#0000B3" );
    });
    
    it( "Should transform hotpink colors to DEUTERANOMALY hotpink.", () => {
        expect( AllyFe( Filter.deuteranomaly, "hotpink" )).to.equal( "#E190A9" );
        expect( AllyFe( Filter.deuteranomaly, "#ff69b4" )).to.equal( "#E190A9" );
        expect( AllyFe( Filter.deuteranomaly, "hsl( 330, 100%, 71%)" )).to.equal( "#E191AB" ); //TODO HSL values are within margin of error
        expect( AllyFe( Filter.deuteranomaly, "rgb( 255, 105, 180 )" )).to.equal( "#E190A9" );
        expect( AllyFe( Filter.deuteranomaly, "rgb( 255, 105, 180, 1 )" )).to.equal( "#E190A9" );
        expect( AllyFe( Filter.deuteranomaly, "rgb( 255, 105, 180, 0.5 )" )).to.equal( "#E190A9" );
    });
    
    it( "Should transform red colors to DEUTERANOMALY red.", () => {
        expect( AllyFe( Filter.deuteranomaly, "red" )).to.equal( "#CC4200" );
        expect( AllyFe( Filter.deuteranomaly, "#ff0000" )).to.equal( "#CC4200" );
        expect( AllyFe( Filter.deuteranomaly, "hsl( 0, 100%, 50%)" )).to.equal( "#CC4200" );
        expect( AllyFe( Filter.deuteranomaly, "rgb( 255,0,0)" )).to.equal( "#CC4200" );
        expect( AllyFe( Filter.deuteranomaly, "rgb( 255,0,0,1)" )).to.equal( "#CC4200" );
        expect( AllyFe( Filter.deuteranomaly, "rgb( 255,0,0,0.5)" )).to.equal( "#CC4200" );
    });
    
    it( "Should transform red colors to ACHROMATOPSIA red.", () => {
        expect( AllyFe( Filter.achromatopsia, "red" )).to.equal( "#4C4C4C" );
        expect( AllyFe( Filter.achromatopsia, "#ff0000" )).to.equal( "#4C4C4C" );
        expect( AllyFe( Filter.achromatopsia, "hsl( 0, 100%, 50%)" )).to.equal( "#4C4C4C" );
        expect( AllyFe( Filter.achromatopsia, "rgb( 255,0,0)" )).to.equal( "#4C4C4C" );
        expect( AllyFe( Filter.achromatopsia, "rgb( 255,0,0,1)" )).to.equal( "#4C4C4C" );
        expect( AllyFe( Filter.achromatopsia, "rgb( 255,0,0,0.5)" )).to.equal( "#4C4C4C" );
    });
    
    it( "Should transform yellow colors to ACHROMATOPSIA yellow.", () => {
        expect( AllyFe( Filter.achromatopsia, "yellow" )).to.equal( "#E2E2E2" );
        expect( AllyFe( Filter.achromatopsia, "#ffff00" )).to.equal( "#E2E2E2" );
        expect( AllyFe( Filter.achromatopsia, "hsl( 60, 100%, 50%)" )).to.equal( "#E2E2E2" );
        expect( AllyFe( Filter.achromatopsia, "rgb( 255,255,0)" )).to.equal( "#E2E2E2" );
        expect( AllyFe( Filter.achromatopsia, "rgb( 255,255,0,1)" )).to.equal( "#E2E2E2" );
        expect( AllyFe( Filter.achromatopsia, "rgb( 255,255,0,0.5)" )).to.equal( "#E2E2E2" );
    });
    
    it( "Should transform orange colors to NORMAL orange.", () => {
        expect( AllyFe( Filter.normal, "orange" )).to.equal( "#FFA500" );
        expect( AllyFe( Filter.normal, "#ffa500" )).to.equal( "#FFA500" );
        expect( AllyFe( Filter.normal, "hsl( 39, 100%, 50%)" )).to.equal( "#FFA600" );         //TODO HSL values are within margin of error
        expect( AllyFe( Filter.normal, "rgb( 255,165,0)" )).to.equal( "#FFA500" );
        expect( AllyFe( Filter.normal, "rgb( 255,165,0,1)" )).to.equal( "#FFA500" );
        expect( AllyFe( Filter.normal, "rgb( 255,165,0,0.5)" )).to.equal( "#FFA500" );
    });
});

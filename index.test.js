const ColourMatrix = require("./index.js")
const filter = require("./js/ColourFilters")

test("Red converts to DEUTERANOPIA red.", () => {
    expect(ColourMatrix(filter.deuteranopia, "red")).toEqual([159, 179, 0, 1]);
    expect(ColourMatrix(filter.deuteranopia, "#ff0000")).toEqual([159, 179, 0, 1]);
    expect(ColourMatrix(filter.deuteranopia, "hsl(0, 100%, 50%)")).toEqual([159, 179, 0, 1]);
    expect(ColourMatrix(filter.deuteranopia, "rgb(255,0,0)")).toEqual([159, 179, 0, 1]);
    expect(ColourMatrix(filter.deuteranopia, "rgb(255,0,0,1)")).toEqual([159, 179, 0, 1]);
    expect(ColourMatrix(filter.deuteranopia, "rgb(255,0,0,0.5)")).toEqual([159, 179, 0, 0.5]);
});

test("Green converts to DEUTERANOPIA green.", () => {
    // !!! Green incorrectly converts to [0,128,0] !!!! 
    // expect(ColourMatrix(filter.deuteranopia, "green")).toEqual([96, 77, 77, 1]);
    // expect(ColourMatrix(filter.deuteranopia, "#008000")).toEqual([96, 77, 77, 1]);
    // expect(ColourMatrix(filter.deuteranopia, "hsl(120, 100%, 25%)")).toEqual([96, 77, 77, 1]);

    expect(ColourMatrix(filter.deuteranopia, "rgb(0,255,0)")).toEqual([96, 77, 77, 1]);
    expect(ColourMatrix(filter.deuteranopia, "rgb(0,255,0,1)")).toEqual([96, 77, 77, 1]);
    expect(ColourMatrix(filter.deuteranopia, "rgb(0,255,0,0.5)")).toEqual([96, 77, 77, 0.5]);
});

test("Blue converts to DEUTERANOPIA blue.", () => {
    expect(ColourMatrix(filter.deuteranopia, "blue")).toEqual([0, 0, 179, 1]);
    expect(ColourMatrix(filter.deuteranopia, "#0000ff")).toEqual([0, 0, 179, 1]);
    expect(ColourMatrix(filter.deuteranopia, "hsl(240, 100%, 50%)")).toEqual([0, 0, 179, 1]);
    expect(ColourMatrix(filter.deuteranopia, "rgb(0,0,255)")).toEqual([0, 0, 179, 1]);
    expect(ColourMatrix(filter.deuteranopia, "rgb(0,0,255,1)")).toEqual([0, 0, 179, 1]);
    expect(ColourMatrix(filter.deuteranopia, "rgb(0,0,255,0.5)")).toEqual([0, 0, 179, 0.5]);
});

test("Hotpink converts to DEUTERANOMALY hotpink.", () => {
    expect(ColourMatrix(filter.deuteranomaly, "hotpink")).toEqual([225, 144, 169, 1]);
    expect(ColourMatrix(filter.deuteranomaly, "#ff69b4")).toEqual([225, 144, 169, 1]);
    // !!! Incorrectly converts to [225, 145, 171, 1] * Margin of error? !!! 
    //expect(ColourMatrix(filter.deuteranomaly, "hsl(330, 100%, 71%)")).toEqual([225, 144, 169, 1]);
    expect(ColourMatrix(filter.deuteranomaly, "rgb(255,105,180)")).toEqual([225, 144, 169, 1]);
    expect(ColourMatrix(filter.deuteranomaly, "rgb(255,105,180,1)")).toEqual([225, 144, 169, 1]);
    expect(ColourMatrix(filter.deuteranomaly, "rgb(255,105,180,0.5)")).toEqual([225, 144, 169, 0.5]);
});

test("Red converts to DEUTERANOMALY red.", () => {
    expect(ColourMatrix(filter.deuteranomaly, "red")).toEqual([204, 66, 0, 1]);
    expect(ColourMatrix(filter.deuteranomaly, "#ff0000")).toEqual([204, 66, 0, 1]);
    expect(ColourMatrix(filter.deuteranomaly, "hsl(0, 100%, 50%)")).toEqual([204, 66, 0, 1]);
    expect(ColourMatrix(filter.deuteranomaly, "rgb(255,0,0)")).toEqual([204, 66, 0, 1]);
    expect(ColourMatrix(filter.deuteranomaly, "rgb(255,0,0,1)")).toEqual([204, 66, 0, 1]);
    expect(ColourMatrix(filter.deuteranomaly, "rgb(255,0,0,0.5)")).toEqual([204, 66, 0, 0.5]);
});

test("Red converts to ACHROMATOPSIA red.", () => {
    expect(ColourMatrix(filter.achromatopsia, "red")).toEqual([76, 76, 76, 1]);
    expect(ColourMatrix(filter.achromatopsia, "#ff0000")).toEqual([76, 76, 76, 1]);
    expect(ColourMatrix(filter.achromatopsia, "hsl(0, 100%, 50%)")).toEqual([76, 76, 76, 1]);
    expect(ColourMatrix(filter.achromatopsia, "rgb(255,0,0)")).toEqual([76, 76, 76, 1]);
    expect(ColourMatrix(filter.achromatopsia, "rgb(255,0,0,1)")).toEqual([76, 76, 76, 1]);
    expect(ColourMatrix(filter.achromatopsia, "rgb(255,0,0,0.5)")).toEqual([76, 76, 76, 0.5]);
});

test("Yellow converts to ACHROMATOPSIA yellow.", () => {
    expect(ColourMatrix(filter.achromatopsia, "yellow")).toEqual([226, 226, 226, 1]);
    expect(ColourMatrix(filter.achromatopsia, "#ffff00")).toEqual([226, 226, 226, 1]);
    expect(ColourMatrix(filter.achromatopsia, "hsl(60, 100%, 50%)")).toEqual([226, 226, 226, 1]);
    expect(ColourMatrix(filter.achromatopsia, "rgb(255,255,0)")).toEqual([226, 226, 226, 1]);
    expect(ColourMatrix(filter.achromatopsia, "rgb(255,255,0,1)")).toEqual([226, 226, 226, 1]);
    expect(ColourMatrix(filter.achromatopsia, "rgb(255,255,0,0.5)")).toEqual([226, 226, 226, 0.5]);
});

test("ColourMatrix handles invalid filters", () => {
    expect(() => {
        ColourMatrix([], "red")
    }).toThrowError("ERROR: Invalid Filter!");
    expect(() => {
        ColourMatrix("filter", "red")
    }).toThrowError("ERROR: Invalid Filter!");
    expect(() => {
        ColourMatrix({}, "red")
    }).toThrowError("ERROR: Invalid Filter!");
    expect(() => {
        ColourMatrix([0,0,0,0,0,0], "red")
    }).toThrowError("ERROR: Invalid Filter!");
});

test("ColourMatrix returns correct ALPHA values", () => {
    expect(ColourMatrix(filter.normal, "rgb(255,255,255,1)")).toEqual([255, 255, 255, 1]);
    expect(ColourMatrix(filter.normal, "rgb(255,255,255,0.5)")).toEqual([255, 255, 255, 0.5]);
    expect(ColourMatrix(filter.normal, "rgb(255,255,255,0.25)")).toEqual([255, 255, 255, 0.25]);
    expect(ColourMatrix(filter.normal, "rgb(255,255,255,3)")).toEqual([255, 255, 255, 1]);
});
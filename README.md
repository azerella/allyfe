# allyfe

> 🌈 Lightweight color conversion library that converts color codes to accessible alternatives

## Install

```javascript
npm i allyfe
```

## Usage

Turn a valid color code into an accessible alternative using color-blindness filters. For example, `red` to a person with deuteranopia would look something like `#0000B3`.

### Module

```javascript
const { AllyFe, Filter } = require ( 'allyfe' );

AllyFe( Filter.deuteranopia, 'red' );                 // Returns #9FB300
AllyFe( Filter.deuteranopia, '#ff0000' ))             // Returns #9FB300
AllyFe( Filter.tritanomaly, 'red' );                  // Returns #F70000
AllyFe( Filter.tritanomaly, 'hsl( 0, 100%, 50% )' )   // Returns #F70000
AllyFe( Filter.protanopia, 'rgb( 255,0,0,1 )' )       // Returns #918E00
...
```

#### Supported Filters

```bash
deuteranopia
deuteranomaly
protanopia
protanomaly
tritanopiat
tritanomaly
achromatopsia
achromatomaly
```

## Test

```javascript
npm test
```

## Contribute

Don't be scared raise an issue or a pull request! Any contributions, no matter how big or small will land your picture here.

<div style="display:inline;">
  <a href="https://github.com/adamzerella"><img width="64" height="64" src="https://avatars0.githubusercontent.com/u/1501560?s=460&v=4" alt="Adam Zerella"/></a>
</div>

[badge_coffee_donate]: https://adamzerella.com/badges/coffee.svg
[badge_paypal_donate]: https://adamzerella.com/badges/paypal.svg
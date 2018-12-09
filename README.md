# allyfe
[![Build Status](https://travis-ci.org/adamzerella/allyfe.svg?branch=master)](https://travis-ci.org/adamzerella/allyfe)
[![GitHub stars](https://img.shields.io/github/stars/adamzerella/allyfe.svg)](https://github.com/adamzerella/allyfe/stargazers)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react.svg)](https://github.com/adamzerella/allyfe)

> 🌈 Turn a valid color code into an accessible alternative using color-blindness filters. For example, `red` to a person with deuteranopia would look something like `#0000B3`.
 
# Prerequisites
This project *preferences* for you to have [Node.js LTS](https://nodejs.org/en/) installed, which at the time of writing is `v10.13.0`.

# Install
```javascript
npm i
```

# Test
```javascript
npm test
```

# Usage
```javascript
const { AllyFe, Filter } = require ( 'allyfe' );

AllyFe( Filter.deuteranopia, 'red' );                 // Returns #9FB300
AllyFe( Filter.deuteranopia, '#ff0000' ))             // Returns #9FB300
AllyFe( Filter.tritanomaly, 'red' );                  // Returns #F70000
AllyFe( Filter.tritanomaly, 'hsl( 0, 100%, 50% )' )   // Returns #F70000
AllyFe( Filter.protanopia, 'rgb( 255,0,0,1 )' )       // Returns #918E00
...
```

## Supported Filters 
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

# License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/adamzerella/allyfe/blob/master/LICENSE) file for details.

# Contributors
<div style="display:inline;">
  <img width="64" height="64" href="https://github.com/adamzerella" src="https://avatars0.githubusercontent.com/u/1501560?s=460&v=4" alt="Adam A. Zerella"/>
</div>
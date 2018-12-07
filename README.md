# allyfe
[![Build Status](https://travis-ci.org/adamzerella/allyfe.svg?branch=master)](https://travis-ci.org/adamzerella/allyfe)

> 🌈 Turn a valid color code into an accessible alternative using color-blindness filters. For example, `red` to a person with deuteranopia would look something like `#0000B3`.
 
# Install
```bash
npm i
```

# Test
```bash
npm test
```

# Usage
```bash
const { AllyFe, Filter } = require ( 'allyfe' );

AllyFe( Filter.deuteranopia, red );  // Returns #0000B3
```

# License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/adamzerella/allyfe/blob/master/LICENSE.md) file for details.
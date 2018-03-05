# colour-filter-converter
[![Build Status](https://travis-ci.org/adamzerella/colour-filter-converter.svg?branch=master)](https://travis-ci.org/adamzerella/accessible-colour-converter)

> 👀 See a colour value given a standard colour and an accessability filter
>  e.g red to a person with deuteranopia would look something like #0000B3 ). 

### Install
```js
npm install
```

### Test
```js
npm test
```

### Usage
```js
const AccessibleColourConverter = require ( 'colour-filter-converter' );

AccessibleColourConverter( Filter.deuteranopia, red );  // Returns #0000B3 
```

## Contributing
Please read [CONTRIBUTING.md](https://github.com/adamzerella/colour-filter-converter/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/adamzerella/colour-filter-converter/blob/master/LICENSE.md) file for details.
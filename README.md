# accessible-colour-converter
[![Build Status](https://travis-ci.org/adamzerella/accessible-colour-converter.svg?branch=master)](https://travis-ci.org/adamzerella/accessible-colour-converter)

> Generate a colour conversion hex value given a standard colour and an accessability filter ( e.g red to a person with deuteranopia would look something like #0000B3 ). 👀 

### Install
```
npm install
```

### Test
```
npm test
```

### Usage
```
const AccessibleColourConverter = require ( 'accessible-colour-converter' );

AccessibleColourConverter( Filter.deuteranopia, red );  // Returns #0000B3 
```

## Contributing
Please read [CONTRIBUTING.md](https://github.com/adamzerella/accessible-colour-converter/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/adamzerella/accessible-colour-converter/LICENSE.md) file for details.
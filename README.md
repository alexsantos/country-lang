# [![NPM version](https://badge.fury.io/js/country-lang.svg)](https://npmjs.org/package/country-lang) [![Build Status](https://travis-ci.org/alexsantos/country-lang.svg?branch=master)](https://travis-ci.org/alexsantos/country-lang) [![Dependency Status](https://david-dm.org/alexsantos/country-lang.svg)](https://david-dm.org/alexsantos/country-lang) [![devDependency Status](https://david-dm.org/alexsantos/country-lang/dev-status.svg)](https://david-dm.org/alexsantos/country-lang#info=devDependencies)

# A node module to test for country/lang.

## Getting Started
Install the module with: `npm install country-lang`

```javascript
var country_lang = require('country-lang');
country_lang.assert('PT', 'pt'); // true
country_lang.assert('US', 'pt'); //false
```

## Documentation
This module is based on the supported languages for each country as listed on the file SUPPORTED available on the Ubuntu 13.10 directory ```/usr/share/i18n```. The functions available are:
* __assert(country, language)__ - tests if the country as ISO 3166-1 alpha-2 (uppercase) and language (lowercase) are two possible pairs. If possible, returns true, all other situations returns false.
* __languages(country)__ - returns an array with all possible languages for that country. If the country doesn't exist, returns an empty array.
* __countries(language)__ - returns an array with all possible countries for that language. If the language doesn't exist, returns an empty array.

The command line tool /bin/country-lang.js receives two parameters just like the assert function. If it is only passed the country it returns an array of possible languages.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2014 Alexandre Santos  
Licensed under the MIT license.

[npm-url]: https://npmjs.org/package/country-lang
[npm-image]: https://badge.fury.io/js/country-lang.svg


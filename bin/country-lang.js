#!/usr/bin/node

var matrix = require('../data/country_lang.json'),
    country = process.argv[2],
    language = process.argv[3];

switch (country) {
case '-h':
case '--help':
    console.log("Usage: node country-lang.js COUNTRY [LANGUAGE] \nVerifies if the pair country/language is valid.\n\nIf no language is provided it returns a list of languages");
    break;
case undefined:
    console.log("No parameters given. -h or --help for usage instructions.");
    break;
default:
    if (matrix.filter(function (x) {
        return x.country === country;
    }).length === 0) {
        console.log("Country not found.");
        break;
    }
    switch (language) {
    case undefined:
        console.log(matrix.filter(function (x) {
            return x.country === country;
        }).shift().languages);
        break;
    default:
        console.log(matrix.filter(function (countries) {
            return countries.country === country;
        }).filter(function (countryLang) {
            return countryLang.languages == language;
        }).length > 0 ? true : false);
    }
}

/*
 * testing_grunt
 * https://github.com/santosam/testing_grunt
 *
 * Copyright (c) 2014 AlexSantos
 * Licensed under the MIT license.
 */

'use strict';
var fs = require('fs'),
    matrix = JSON.parse(fs.readFileSync('data/country_lang.json'));

function country_lang(country, language) {

    if (matrix[country] === undefined) {
        return false;
    }
    return matrix[country].indexOf(language) > -1 ? true : false;
}

module.exports = country_lang;

/*
 * country-lang
 * https://github.com/AlexSantos/country-lang
 *
 * Copyright (c) 2014 AlexSantos
 * Licensed under the MIT license.
 */

'use strict';

var matrix = require('./data/country_lang.json');

exports.assert = function (country, language) {

    if (matrix[country] === undefined) {
        return false;
    }
    return matrix[country].indexOf(language) > -1 ? true : false;
};


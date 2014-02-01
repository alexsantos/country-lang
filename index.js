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

exports.languages = function (country) {

    if (country) {
        return matrix[country];
    }
    return [];
};

exports.countries = function (language) {

    var countries = [],
        prop;
    if (language) {
        for (prop in matrix) {
            if (matrix.hasOwnProperty(prop)) {
                if (matrix[prop].filter(function (country) {return country === language; }).length > 0) {
                    countries.push(prop);
                }
            }
        }
    }
    return countries;
};


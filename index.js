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

    return matrix.filter(function (countries) {
        return countries.country == country;
    }).filter(function (countryLang) {
        return countryLang.languages.indexOf(language) > -1; })
    .length > 0 ? true : false;
};

exports.languages = function (country) {

    if (country) {
        return matrix.filter(function (language) {
            return language.country == country;
        }).shift().languages;
    }
    return [];
};


exports.countries = function (language) {

    return matrix.filter(function (country) {
        return country.languages.filter(function (countryLang) {
            return countryLang == language;
        }).length > 0;
    }).map(function (countries) {
        return countries.country;
    });
};

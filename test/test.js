'use strict';

var country_lang = require('../index.js');

exports.test = {
    'inexistent country': function (test) {
        test.expect(1);
        test.equal(country_lang.assert('XX'), false, 'should be false.');
        test.done();
    },
    'country exists but no language': function (test) {
        test.expect(1);
        test.equal(country_lang.assert('PT'), false, 'should be false.');
        test.done();
    },
    'country exists but language not exists': function (test) {
        test.expect(1);
        test.equal(country_lang.assert('PT', 'en'), false, 'should be false.');
        test.done();
    },
    'country exists and language exists PT pt': function (test) {
        test.expect(1);
        test.ok(country_lang.assert('PT', 'pt'), 'should be true.');
        test.done();
    },
    'country exists and language exists CH fr': function (test) {
        test.expect(1);
        test.ok(country_lang.assert('CH', 'fr'), 'should be true.');
        test.done();
    },
    'returns an array of languages for country': function (test) {
        test.expect(2);
        test.deepEqual(country_lang.languages('PT'), ['pt'], 'should be pt');
        test.deepEqual(country_lang.languages(), [], 'an empty array');
        test.done();
    },
    'returns an array of countries for language': function (test) {
        test.expect(3);
        test.deepEqual(country_lang.countries('pt'), ['BR', 'PT'], 'should be BR and PT');
        test.deepEqual(country_lang.countries('xx'), [], 'an empty array');
        test.deepEqual(country_lang.countries(), [], 'an empty array');
        test.done();
    }
};

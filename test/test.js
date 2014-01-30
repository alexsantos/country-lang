'use strict';

var country_lang = require('../index.js');

exports.test = {
    'inexistent country': function (test) {
        test.expect(1);
        test.equal(country_lang('XX'), false, 'should be false.');
        test.done();
    },
    'country exists but no language': function (test) {
        test.expect(1);
        test.equal(country_lang('PT'), false, 'should be false.');
        test.done();
    },
    'country exists but language not exists': function (test) {
        test.expect(1);
        test.equal(country_lang('PT', 'en'), false, 'should be false.');
        test.done();
    },
    'country exists and language exists': function (test) {
        test.expect(1);
        test.ok(country_lang('PT', 'pt'), 'should be true.');
        test.done();
    }
};

import {expect} from 'chai';

import {agrest} from '../lib/agrest'
import translations from './translations.json';

describe('agrest', function () {
    var translate;

    beforeEach(function () {
        translate = agrest(translations, {
            language: 'en',
            plurals: {
                en: (n) => Number(n != 1)
            }
        });
    });

    it('supports simple translation', function () {
        expect(translate('test_label')).to.equal('label');
    });

    it('supports simple translation with `count` key', function() {
        expect(translate('test_label', {count: 0})).to.equal('label');
    });

    it('supports plural translation', function () {
        expect(translate('test_plural', {count: 0})).to.equal('0 users');
        expect(translate('test_plural', {count: 1})).to.equal('1 user');
        expect(translate('test_plural', {count: 2})).to.equal('2 users');
    });

    it('supports plural nested', function () {
        expect(translate('test_nested.abc.cde')).to.equal('nested_value');
    });

});

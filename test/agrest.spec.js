import {expect} from 'chai';

import {agrest} from '../index'
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

    it('simple translation', function () {
        expect(translate('test_label')).to.equal('label');
    });

    it('plural translation', function () {
        expect(translate('test_plural', {count: 1})).to.equal('1 user');
        expect(translate('test_plural', {count: 2})).to.equal('2 users');
    });

    it('plural nested', function () {
        expect(translate('test_nested.abc.cde')).to.equal('nested_value');
    });

});

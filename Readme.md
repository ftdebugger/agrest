Агрэст [![Build Status](https://travis-ci.org/ftdebugger/agrest.svg?branch=master)](https://travis-ci.org/ftdebugger/agrest)
======

> Якім будзе тваё першае слова на роднай мове?

Simply stupid i18n library

Installation
============

npm install --save agrest

Usage
=====

```js
import {agrest} from 'agrest';

$.getJSON('/assets/i18n/en.json').then(translations => {
    window.translate = agrest(translations, {
        language: 'en',
        plurals: {
            en: (n) => Number(n != 1),
            ru: (n) => Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && 
                (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)
        }
    });
    
    translate('simple_key');
    translate('nested.key');
    translate('plural_key', {count: 1});
    translate('placeholder', {value: "some value"});
})

// en.json

{
    "simple_key": "Simple value",
    "nested": {
        "key": "Nested value"
    },
    "plural_key": [
        "__count__ key",
        "__count__ keys"
    ],
    "placeholder": "And here come '__value__'"
}
```

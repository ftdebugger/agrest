var agrest = function (translations, {language = 'en', plurals = {}} = {}) {
    var plural = plurals[language];

    var simpleTranslate = function (key) {
        if (key.indexOf('.') === -1) {
            return translations[key];
        }

        var parts = key.split('.'),
            current = translations;

        while (parts.length && current) {
            current = current[parts.shift()];
        }

        return current;
    };

    return function (key, params) {
        let translated = simpleTranslate(key);

        if (params) {
            if (params.hasOwnProperty('count')) {
                translated = translated[plural(params.count)];
            }

            Object.keys(params).forEach(key => {
                translated = translated.replace('__' + key + '__', () => params[key]);
            });
        }

        return translated;
    };
};

export {agrest};

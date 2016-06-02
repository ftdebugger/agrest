export let detect = function (languages) {
    var candidates = [];

    if (typeof navigator !== 'undefined') {
        if (navigator.languages) {
            candidates = candidates.concat(navigator.languages);
        }

        if (navigator.language) {
            candidates.push(navigator.language);
        }

        if (navigator.userLanguage) {
            candidates.push(navigator.userLanguage);
        }

        for (var index = 0, length = candidates.length; index < length; index++) {
            var lang = candidates[index].toLowerCase().split('-')[0];

            if (languages.indexOf(lang) > -1) {
                return lang;
            }
        }
    }

    return languages[0];
};
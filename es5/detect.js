(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define('agrest', ['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.agrest = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    exports.__esModule = true;
    var detect = function detect(languages) {
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
    exports.detect = detect;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9kZXRlY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLFFBQUksTUFBTSxHQUFHLFNBQVQsTUFBTSxDQUFhLFNBQVMsRUFBRTtBQUNyQyxZQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7O0FBRXBCLFlBQUksT0FBTyxTQUFTLEtBQUssV0FBVyxFQUFFO0FBQ2xDLGdCQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUU7QUFDckIsMEJBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN2RDs7QUFFRCxnQkFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO0FBQ3BCLDBCQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN2Qzs7QUFFRCxnQkFBSSxTQUFTLENBQUMsWUFBWSxFQUFFO0FBQ3hCLDBCQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMzQzs7QUFFRCxpQkFBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtBQUNyRSxvQkFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFekQsb0JBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUM5QiwyQkFBTyxJQUFJLENBQUM7aUJBQ2Y7YUFDSjtTQUNKOztBQUVELGVBQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3ZCLENBQUMiLCJmaWxlIjoiZGV0ZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGxldCBkZXRlY3QgPSBmdW5jdGlvbiAobGFuZ3VhZ2VzKSB7XG4gICAgdmFyIGNhbmRpZGF0ZXMgPSBbXTtcblxuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAobmF2aWdhdG9yLmxhbmd1YWdlcykge1xuICAgICAgICAgICAgY2FuZGlkYXRlcyA9IGNhbmRpZGF0ZXMuY29uY2F0KG5hdmlnYXRvci5sYW5ndWFnZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hdmlnYXRvci5sYW5ndWFnZSkge1xuICAgICAgICAgICAgY2FuZGlkYXRlcy5wdXNoKG5hdmlnYXRvci5sYW5ndWFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmF2aWdhdG9yLnVzZXJMYW5ndWFnZSkge1xuICAgICAgICAgICAgY2FuZGlkYXRlcy5wdXNoKG5hdmlnYXRvci51c2VyTGFuZ3VhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwLCBsZW5ndGggPSBjYW5kaWRhdGVzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBsYW5nID0gY2FuZGlkYXRlc1tpbmRleF0udG9Mb3dlckNhc2UoKS5zcGxpdCgnLScpWzBdO1xuXG4gICAgICAgICAgICBpZiAobGFuZ3VhZ2VzLmluZGV4T2YobGFuZykgPiAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsYW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhbmd1YWdlc1swXTtcbn07Il19
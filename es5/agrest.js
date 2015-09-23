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
    var agrest = function agrest(translations) {
        var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        var _ref$language = _ref.language;
        var language = _ref$language === undefined ? 'en' : _ref$language;
        var _ref$plurals = _ref.plurals;
        var plurals = _ref$plurals === undefined ? {} : _ref$plurals;

        var plural = plurals[language];

        var simpleTranslate = function simpleTranslate(key) {
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
            var translated = simpleTranslate(key);

            if (params) {
                if (params.count) {
                    translated = translated[plural(params.count)];
                }

                Object.keys(params).forEach(function (key) {
                    translated = translated.replace('__' + key + '__', function () {
                        return params[key];
                    });
                });
            }

            return translated;
        };
    };

    exports.agrest = agrest;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFJLE1BQU0sR0FBRyxTQUFULE1BQU0sQ0FBYSxZQUFZLEVBQXdDO3lFQUFKLEVBQUU7O2lDQUFuQyxRQUFRO1lBQVIsUUFBUSxpQ0FBRyxJQUFJO2dDQUFFLE9BQU87WUFBUCxPQUFPLGdDQUFHLEVBQUU7O0FBQy9ELFlBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFL0IsWUFBSSxlQUFlLEdBQUcsU0FBbEIsZUFBZSxDQUFhLEdBQUcsRUFBRTtBQUNqQyxnQkFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO0FBQ3pCLHVCQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM1Qjs7QUFFRCxnQkFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQ3RCLE9BQU8sR0FBRyxZQUFZLENBQUM7O0FBRTNCLG1CQUFPLEtBQUssQ0FBQyxNQUFNLElBQUksT0FBTyxFQUFFO0FBQzVCLHVCQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQ3BDOztBQUVELG1CQUFPLE9BQU8sQ0FBQztTQUNsQixDQUFDOztBQUVGLGVBQU8sVUFBVSxHQUFHLEVBQUUsTUFBTSxFQUFFO0FBQzFCLGdCQUFJLFVBQVUsR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXRDLGdCQUFJLE1BQU0sRUFBRTtBQUNSLG9CQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFDZCw4QkFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ2pEOztBQUVELHNCQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsRUFBSTtBQUMvQiw4QkFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLEVBQUU7K0JBQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQztxQkFBQSxDQUFDLENBQUM7aUJBQ3pFLENBQUMsQ0FBQzthQUNOOztBQUVELG1CQUFPLFVBQVUsQ0FBQztTQUNyQixDQUFDO0tBQ0wsQ0FBQzs7WUFFTSxNQUFNLEdBQU4sTUFBTSIsImZpbGUiOiJhZ3Jlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYWdyZXN0ID0gZnVuY3Rpb24gKHRyYW5zbGF0aW9ucywge2xhbmd1YWdlID0gJ2VuJywgcGx1cmFscyA9IHt9fSA9IHt9KSB7XG4gICAgdmFyIHBsdXJhbCA9IHBsdXJhbHNbbGFuZ3VhZ2VdO1xuXG4gICAgdmFyIHNpbXBsZVRyYW5zbGF0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKGtleS5pbmRleE9mKCcuJykgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25zW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGFydHMgPSBrZXkuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgIGN1cnJlbnQgPSB0cmFuc2xhdGlvbnM7XG5cbiAgICAgICAgd2hpbGUgKHBhcnRzLmxlbmd0aCAmJiBjdXJyZW50KSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudFtwYXJ0cy5zaGlmdCgpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgIH07XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGtleSwgcGFyYW1zKSB7XG4gICAgICAgIGxldCB0cmFuc2xhdGVkID0gc2ltcGxlVHJhbnNsYXRlKGtleSk7XG5cbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5jb3VudCkge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZWQgPSB0cmFuc2xhdGVkW3BsdXJhbChwYXJhbXMuY291bnQpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlZCA9IHRyYW5zbGF0ZWQucmVwbGFjZSgnX18nICsga2V5ICsgJ19fJywgKCkgPT4gcGFyYW1zW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJhbnNsYXRlZDtcbiAgICB9O1xufTtcblxuZXhwb3J0IHthZ3Jlc3R9O1xuIl19
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
                if (params.hasOwnProperty('count')) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9hZ3Jlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFFBQUksTUFBTSxHQUFHLFNBQVQsTUFBTSxDQUFhLFlBQVksRUFBd0M7eUVBQUosRUFBRTs7aUNBQW5DLFFBQVE7WUFBUixRQUFRLGlDQUFHLElBQUk7Z0NBQUUsT0FBTztZQUFQLE9BQU8sZ0NBQUcsRUFBRTs7QUFDL0QsWUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUUvQixZQUFJLGVBQWUsR0FBRyxTQUFsQixlQUFlLENBQWEsR0FBRyxFQUFFO0FBQ2pDLGdCQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDekIsdUJBQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzVCOztBQUVELGdCQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDdEIsT0FBTyxHQUFHLFlBQVksQ0FBQzs7QUFFM0IsbUJBQU8sS0FBSyxDQUFDLE1BQU0sSUFBSSxPQUFPLEVBQUU7QUFDNUIsdUJBQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7YUFDcEM7O0FBRUQsbUJBQU8sT0FBTyxDQUFDO1NBQ2xCLENBQUM7O0FBRUYsZUFBTyxVQUFVLEdBQUcsRUFBRSxNQUFNLEVBQUU7QUFDMUIsZ0JBQUksVUFBVSxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFdEMsZ0JBQUksTUFBTSxFQUFFO0FBQ1Isb0JBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUNoQyw4QkFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ2pEOztBQUVELHNCQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsRUFBSTtBQUMvQiw4QkFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLEVBQUU7K0JBQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQztxQkFBQSxDQUFDLENBQUM7aUJBQ3pFLENBQUMsQ0FBQzthQUNOOztBQUVELG1CQUFPLFVBQVUsQ0FBQztTQUNyQixDQUFDO0tBQ0wsQ0FBQzs7WUFFTSxNQUFNLEdBQU4sTUFBTSIsImZpbGUiOiJhZ3Jlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYWdyZXN0ID0gZnVuY3Rpb24gKHRyYW5zbGF0aW9ucywge2xhbmd1YWdlID0gJ2VuJywgcGx1cmFscyA9IHt9fSA9IHt9KSB7XG4gICAgdmFyIHBsdXJhbCA9IHBsdXJhbHNbbGFuZ3VhZ2VdO1xuXG4gICAgdmFyIHNpbXBsZVRyYW5zbGF0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKGtleS5pbmRleE9mKCcuJykgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25zW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGFydHMgPSBrZXkuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgIGN1cnJlbnQgPSB0cmFuc2xhdGlvbnM7XG5cbiAgICAgICAgd2hpbGUgKHBhcnRzLmxlbmd0aCAmJiBjdXJyZW50KSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudFtwYXJ0cy5zaGlmdCgpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgIH07XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGtleSwgcGFyYW1zKSB7XG4gICAgICAgIGxldCB0cmFuc2xhdGVkID0gc2ltcGxlVHJhbnNsYXRlKGtleSk7XG5cbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eSgnY291bnQnKSkge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZWQgPSB0cmFuc2xhdGVkW3BsdXJhbChwYXJhbXMuY291bnQpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlZCA9IHRyYW5zbGF0ZWQucmVwbGFjZSgnX18nICsga2V5ICsgJ19fJywgKCkgPT4gcGFyYW1zW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJhbnNsYXRlZDtcbiAgICB9O1xufTtcblxuZXhwb3J0IHthZ3Jlc3R9O1xuIl19
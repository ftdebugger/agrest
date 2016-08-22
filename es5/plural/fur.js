(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("agrest", ["exports", "module"], factory);
  } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.agrest = mod.exports;
  }
})(this, function (exports, module) {
  "use strict";

  module.exports = function (n) {
    return Number(n != 1);
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9wbHVyYWwvZnVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OzttQkFBZSxVQUFDLENBQUM7V0FBSyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUFBIiwiZmlsZSI6ImZ1ci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChuKSA9PiBOdW1iZXIobiAhPSAxKSJdfQ==
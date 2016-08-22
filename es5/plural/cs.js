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
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9wbHVyYWwvY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O21CQUFlLFVBQUMsQ0FBQztXQUFLLE1BQU0sQ0FBQyxBQUFDLENBQUMsSUFBSSxDQUFDLEdBQUksQ0FBQyxHQUFHLEFBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7R0FBQSIsImZpbGUiOiJjcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChuKSA9PiBOdW1iZXIoKG4gPT0gMSkgPyAwIDogKG4gPj0gMiAmJiBuIDw9IDQpID8gMSA6IDIpIl19
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
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9wbHVyYWwvY3kuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O21CQUFlLFVBQUMsQ0FBQztXQUFLLE1BQU0sQ0FBQyxBQUFDLENBQUMsSUFBSSxDQUFDLEdBQUksQ0FBQyxHQUFHLEFBQUMsQ0FBQyxJQUFJLENBQUMsR0FBSSxDQUFDLEdBQUcsQUFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUFBIiwiZmlsZSI6ImN5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKG4pID0+IE51bWJlcigobiA9PSAxKSA/IDAgOiAobiA9PSAyKSA/IDEgOiAobiAhPSA4ICYmIG4gIT0gMTEpID8gMiA6IDMpIl19
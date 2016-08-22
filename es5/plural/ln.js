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
    return Number(n > 1);
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9wbHVyYWwvbG4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O21CQUFlLFVBQUMsQ0FBQztXQUFLLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQUEiLCJmaWxlIjoibG4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAobikgPT4gTnVtYmVyKG4gPiAxKSJdfQ==
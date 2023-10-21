"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debounce = void 0;
var Debounce = function (fn, ms) {
    if (ms === void 0) { ms = 300; }
    var timeoutId;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () { return fn.apply(_this, args); }, ms);
    };
};
exports.Debounce = Debounce;

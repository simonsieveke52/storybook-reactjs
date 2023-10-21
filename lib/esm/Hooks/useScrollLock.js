"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLockBodyScroll = void 0;
var react_1 = require("react");
function useLockBodyScroll() {
    // useLaoutEffect callback return type is "() => void" type
    (0, react_1.useLayoutEffect)(function () {
        // Get original body overflow
        var originalStyle = window.getComputedStyle(document.body).overflow;
        // Prevent scrolling on mount
        document.body.style.overflow = 'hidden';
        // Re-enable scrolling when component unmounts
        return function () { return (document.body.style.overflow = originalStyle); };
    }, []); // Empty array ensures effect is only run on mount and unmount
}
exports.useLockBodyScroll = useLockBodyScroll;

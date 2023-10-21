import { useLayoutEffect } from 'react';
export function useLockBodyScroll() {
    // useLaoutEffect callback return type is "() => void" type
    useLayoutEffect(function () {
        // Get original body overflow
        var originalStyle = window.getComputedStyle(document.body).overflow;
        // Prevent scrolling on mount
        document.body.style.overflow = 'hidden';
        // Re-enable scrolling when component unmounts
        return function () { return (document.body.style.overflow = originalStyle); };
    }, []); // Empty array ensures effect is only run on mount and unmount
}

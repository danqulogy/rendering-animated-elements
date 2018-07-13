;
(function($) {
    // rAF Shim
    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    $.addEventListener("DOMContentLoaded", function() {
        var body = $.getElementsByTagName('body')[0];




    }, false);
}(document));
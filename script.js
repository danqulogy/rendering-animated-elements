;
(function($) {

    $.addEventListener("DOMContentLoaded", function() {
        var body = $.getElementsByTagName('body')[0];

        var canvas = Raphael(0, 0, 400, 400);
        var rect = canvas.rect(0, 0, 100, 100).attr('fill', '#f00');

        rect.animate({
            "0%": {
                x: 0,
                y: 0,
                easing: 'bounce'
            },
            "25%": {
                x: 280,
                y: 0,
                easing: '>'
            },
            "57%": {
                x: 280,
                y: 280,
                easing: '<>'
            },
            "57%": {
                x: 0,
                y: 280,
                easing: '<'
            },
            "100%": {
                x: 0,
                y: 0,
                easing: 'bounce'
            }
        }, 4000);

    }, false);
}(document));
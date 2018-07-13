;
(function($) {

    $.addEventListener("DOMContentLoaded", function() {
        var body = $.getElementsByTagName('body')[0];

        var canvas = Raphael(0, 0, 300, 300);
        var rect = canvas.rect(0, 0, 100, 100);

        rect.attr('fill', '#f00');

    }, false);
}(document));
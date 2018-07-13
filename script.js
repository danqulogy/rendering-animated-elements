;
(function($) {

    $.addEventListener("DOMContentLoaded", function() {
        var body = $.getElementsByTagName('body')[0];

        var canvas = Raphael(0, 0, 300, 300);
        var rect = canvas.rect(0, 0, 100, 100);
        rect.attr('fill', '#f00');

        var circle = canvas.circle(100, 100, 100);
        circle.attr('fill', '#ff0');

        img = new Image();
        img.src = 'html5.png';

        canvas.image(img.src, 100, 50, 150, 150);

    }, false);
}(document));
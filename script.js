;
(function($) {

    $.addEventListener("DOMContentLoaded", function() {
        var body = $.getElementsByTagName('body')[0];

        obj = $.createElement('div');
        obj.style.width = 100 + 'px';
        obj.style.height = 100 + 'px';
        obj.style.backgroundColor = '#f00';
        obj.style.position = 'absolute';

        x = 0;
        y = 0;
        vx = 4;


        // update();

        function update() {
            x += vx;

            if (x + 100 > body.clientWidth || x < 0) {
                vx *= -1;
            }

            obj.style.left = x + 'px';
            obj.style.top = y + 'px';
            requestAnimationFrame(update);
        }
        body.appendChild(obj);

    }, false);
}(document));
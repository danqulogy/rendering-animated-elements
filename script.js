;(function($){
    
    $.addEventListener("DOMContentLoaded", function(){
        var body = $.getElementsByTagName('body')[0];

        canvas = $.createElement('canvas');
        c = canvas.getContext('2d');

        img = new Image();
        img.src = 'html5.png';

        img.addEventListener('load', function(){
            canvas.width = 300;
            canvas.height = 300;
            
            c.drawImage(img,0,0, 50, 70);
            body.appendChild(canvas);
        });
    },false);
}(document));
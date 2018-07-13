;(function($){
    
    $.addEventListener("DOMContentLoaded", function(){
        var body = $.getElementsByTagName('body')[0];

        canvas = $.createElement('canvas');
        c = canvas.getContext('2d');
        canvas.width = 300;
        canvas.height = 300;
        
        c.fillStyle = '#000';
        c.fillRect(0, 0, canvas.width, canvas.height);

        

        body.appendChild(canvas);

    },false);
}(document));
;(function($){
    
    $.addEventListener("DOMContentLoaded", function(){
        var body = $.getElementsByTagName('body')[0];

        obj = $.createElement('div');
        obj.style.width = 100 + 'px';
        obj.style.height = 100 + 'px';
        obj.style.backgroundColor = '#f00';

        obj.style.position = 'absolute';
        obj.style.webkitTransform = 'translateX(' + 200 + 'px)';
        obj.style.mozTransform = 'translateX(' + 200 + 'px)';
        obj.style.msTransform = 'translateX(' + 200 + 'px)';
        obj.style.transform = 'translateX(' + 200 + 'px)';

        obj.style.webkitTransform = 'translateY(' + 400 + 'px)';
        obj.style.mozTransform = 'translateY(' + 400 + 'px)';
        obj.style.msTransform = 'translateY(' + 400 + 'px)';
        obj.style.transform = 'translateY(' + 400 + 'px)';

        

        body.appendChild(obj);

    },false);
}(document));
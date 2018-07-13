;(function($){
    
    $.addEventListener("DOMContentLoaded", function(){
        var body = $.getElementsByTagName('body')[0];

        obj = $.createElement('div');
        obj.style.width = 100 + 'px';
        obj.style.height = 100 + 'px';
        obj.style.backgroundColor = '#f00';

        

        body.appendChild(obj);

    },false);
}(document));
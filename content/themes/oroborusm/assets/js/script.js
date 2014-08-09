$(function(){
    $('.slide').bxSlider({
        auto: true,
    });

    var fadeBegin = 0, 
    fadeFinish = 300, 
    fadingElement = $('.bio');



    window.onscroll = changePos;

    function changePos() {
        var offset = $(document).scrollTop(), opacity = 0; 
        //console.log(offset);
        if( offset <= fadeBegin ){
            opacity = 1; 
        } else if( offset <= fadeFinish ){
            opacity = 1 - offset / fadeFinish;

        }
        fadingElement.css('opacity',opacity);

        
        var $header = $("header");
        //var $iguales= $("button , .logo , .buscador");
    };
});

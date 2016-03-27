$(document).ready(function(){
    //function which open and close slide menu
    $("#mediaNavButtonSlider").click(function() {
        $(this).parent("#mainNav").toggleClass("openMainNav");
    });

    //Function which aplly a class when element is visible on the viewport
    $(window).scroll(function (e) {
        var scrollTop = $(window).scrollTop();
        var viewportHeight = $(window).height();

        $('section:nth-child(n+2)').each(function () {
            var top = $(this).offset().top;
            var bottom = top + $(this).height();

            if(scrollTop + viewportHeight >= top ){
                $(this).addClass('visible');
            } else {
                console.log(top, bottom, scrollTop, viewportHeight);
                $(this).removeClass('visible');
            }
        });
    });




    //Function witch scrolls page to the next section
    //Firefox
    $(window).bind('DOMMouseScroll', function(e){
        var vheight = $(window).scrollTop();
        var sheight = $('section#cover').height();
        var totalDown = vheight + sheight;
        var totalUp = vheight - sheight;
        if(e.originalEvent.detail > 0) {
            $('body').animate({scrollTop: totalDown}, '1500');
        }else {
            $('body').animate({scrollTop: totalUp}, '1500');
        }
        //prevent page fom scrolling
        return false;
    });

    //Function witch scrolls page to the next section
    //IE, Opera, Safari
    $(window).bind('mousewheel', function(e){
        var vheight = $(window).scrollTop();
        var sheight = $('section#cover').height();
        var totalDown = vheight + sheight;
        var totalUp = vheight - sheight;
        if(e.originalEvent.wheelDelta < 0) {
            $('body').animate({scrollTop: totalDown}, '1500');
        }else {
            $('body').animate({scrollTop: totalUp}, '1500');
        }
        //prevent page fom scrolling
        return false;
    });


});


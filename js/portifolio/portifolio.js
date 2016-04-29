/*function oneScroll(w){
    if( $(window).width() >= 768 ) {
        //Function witch scrolls page to the next section
        //Firefox
        $(window).bind('DOMMouseScroll', function(e){
            var vheight = $(window).scrollTop();
            var sheight = $('section.heightParameter').height();
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
            var sheight = $('section.heightParameter').height();
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
    }
}*/

$(function() {
    /*set viewport height in overlay*/
    var viewPortHeight = $(window).height();
    $(".overlay").css("height", viewPortHeight);
    $(window).on("resize", function(){
        var viewPortHeight = $(window).height();
        $(".overlay").css("height", viewPortHeight);
    });

    //function which open and close slide menu
    $("#mediaNavButtonSlider").click(function() {
        $(this).parent("#mainNav").toggleClass("openMainNav");
    });

    /*//Function which aplly a class when element is visible on the viewport
    $(window).scroll(function (e) {
        var scrollTop = $(window).scrollTop();
        var viewportHeight = $(window).height();

        $(':nth-child(n+2)').each(function () {
            var top = $(this).offset().top;
            var bottom = top + $(this).height();

            if(scrollTop + viewportHeight >= top ){
                $(this).addClass('visible');
            } else {
                console.log(top, bottom, scrollTop, viewportHeight);
                $(this).removeClass('visible');
            }
        });
    });*/

    /*ANIMATE ON SCROLL*/
    //Function which aplly a class (only one time) when element is visible on the viewport. ( this function does not removes class when element is no more visible )
    $(window).scroll(function() {
        $('section').each(function(){
            var elementTopDistance = $(this).offset().top;
            var scrollTopoDistance = $(window).scrollTop();

            if (elementTopDistance < scrollTopoDistance +400) {
                $(this).addClass("visibleEffects");
            }
        });
    });


    /*ANIMATE ON SCROLL*/
    //Function which aplly a class (only one time) when element is visible on the viewport. ( this function does not removes class when element is no more visible )
    $(window).scroll(function() {
        $('.projectItem').each(function(){
            var elementTopDistance = $(this).offset().top;
            var scrollTopoDistance = $(window).scrollTop();

            if (elementTopDistance < scrollTopoDistance +500) {
                $(this).addClass("visibleEffects");
            }
        });
    });

    //Roll page to the first content section
    $(".button").click(function(){
        var viewPortHeight = $(window).height();

        $('html,body').animate({
            scrollTop: viewPortHeight
        }, 1000, function(){
        });

        setTimeout(function(){
            $('body').css("overflow-y","visible");
        }, 500);

    });

    /*Scroll to the top on load*/
    setTimeout(function(){
        $('html,body').scrollTop(0);
    }, 10);

    /*oneScroll();*/

    $(window).scroll(function(e){
        parallax();
    });
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('#portifolio').css('background-position','center '+ -(scrolled*0.3)+'px');
        $('#portifolio').height(); // acho que não tem necessidade
    }

    //Function witch sets a time to remove preloader of the screen
    /*setTimeout(function(){
        $( ".preLoader" ).fadeOut( "slow", function() {

        });
    }, 1500);*/
});


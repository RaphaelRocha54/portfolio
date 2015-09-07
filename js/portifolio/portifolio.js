$(document).ready(function(){
//function whitch open and close slide menu
    $("#mediaNavButtonSlider").click(function() {
        $(this).parent("#mainNav").toggleClass("openMainNav");
    });
});
$(document).ready(function(){
    
// START REGISTRATION POP UP
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
        // Close Popup Event
    $("#popup-close").click(function() {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    });
    // Show Overlay and Popup
    $("#signup-button, #signup-button-future").click(function(){
        overlay.style.display = 'block';
        popup.style.display = 'block';
    });
// END REGISTRATION POP UP

// SHOW STREAMING API

var initialize = false;
var timerId = window.setInterval(function(){

var current = new Date();
var expiry = new Date("July 23, 2016 18:40:00 UTC-4"); // set this for 20 minutes before the event begins

if(!initialize&&(current.getTime()>expiry.getTime())){
    initialize = true;
    $('.hide-onlive').hide();
        vekeo_initialise(origin,'#vekeo-api-streaming-container',vekeo_src);
    $('#streaming, .show-onlive').show();
    $(window).resize(function(){    
        if($(window).width() <= 992) {
            $('.yellow-mobile').css('margin-bottom', '69px');
        }
    });    

    window.clearInterval(timerId);
}

}, 5000);

// END STREAMING API

// START FAQ SLIDE OUT
    $('.slideout-menu-toggle').on('click', function(event){
        event.preventDefault();
        // create menu variables
        var slideoutMenu = $('.faq-slideout');
        var slideoutMenuWidth = $('.faq-slideout').width();
        
        // toggle open class
        slideoutMenu.toggleClass("open");
        
        // slide menu
        if (slideoutMenu.hasClass("open")) {
            slideoutMenu.animate({
                left: "0px"
            }); 
        } else {
            slideoutMenu.animate({
                left: -slideoutMenuWidth
            }, 250);    
        }
    });
// END FAQ SLIDE OUT

// HIDDEN STREAMING INFO
    $("p.streaming-info-toggle").click(function(){
        $(".streaming-info").slideToggle('slow');
    });
// END HIDDEN STREAMING INFO

// SLIDE UP REGISTRATION

$('.mobile-footer').click(function(){
    var link = $('#signup-toggle');
    $('.mobile-signupform').slideToggle('slow', function() {
        if($(this).is(":visible")) {
            link.text('CLOSE');
        }
        else {
            link.text('SIGN UP FOR FUTURE EVENTS');
        }
    });
});

// END SLIDE UP REGISTRATION

});


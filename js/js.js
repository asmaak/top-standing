/*global $*/
$(function () {
  "use strict";
var $link = $('#nav a'),
 $link1=$('.secondbtn'),
 $linkToggle = $('.link-toggle'),
 $toggledDiv = $('.toggled-div'),
 $wrapper = $('.wrapper');
/* Menu Toggle */
$linkToggle.on('click', function () {
    var $currLink = $(this),
    divClass = ('.'+$(this).attr('id'));
    $linkToggle.removeClass('active');
    $currLink.addClass('active');
    $toggledDiv.addClass('nondisp');

    var mySelected = $wrapper.find(divClass);
    mySelected.removeClass('nondisp');

});
/* Smooth Scroll for link*/
$link.on('click', function (event) {
    if (this.hash !== "") {
        var hash = this.hash;
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function () {
            window.location.hash = hash;
        });
    }
});
// start testmonial
(function autoSlider() {

    $('.slider .active').each(function () {

        if (!$(this).is(':last-child')) {

            $(this).delay(6000).fadeOut(2000, function () {

                $(this).removeClass('active').next().addClass('active').fadeIn();

                autoSlider();

            });

        } else {

            $(this).delay(3000).fadeOut(2000, function () {

                $(this).removeClass('active');

                $('.slider div').eq(0).addClass('active').fadeIn();

                autoSlider();

            });

        }

    });

}());

// start parallax
$('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});  

$link.on("click", function() {
if ($(".navbar-toggle").css("display") !== "none"){
$(".navbar-toggle").trigger("click"); 
}
});


// start scroll
var scrolltop=$('.scroll-top');

$(window).scroll(function(){
    if($(this).scrollTop()>=700){
      scrolltop.show();   
    }
    else{
        scrolltop.hide();    
    }
});         
scrolltop.click(function(){
    $('html,body').animate({ scrollTop : 0 }, 600);
});
//start aos animated
AOS.init();


$('#slider').slider({
    range:"min",
    animate:true,
    min:0,
    max:500,
    step:5,
    slide: function ( event, ui) {
    update(1, ui.value);
  } 
});
$('#slider2').slider({
    range:"min",
    animate:true,
    min:0,
    max:10,
    step:1,
    slide: function ( event, ui) {
    update(2, ui.value);
    }
});

$('#area').val(0);
$('#total-price').text(0);
$('#rooms').val(0);

update();
});

function update ( slider, val) {

    var $area = slider == 1?val:$('#area').val();
    var $rooms = slider == 2?val:$('#rooms').val();
    var finalResult= $area * $rooms;
    
    var $surface1=$('#surface1').text($area);
    var $price1=$('#price1').text($rooms);
    $('#area').val($area);
    $('#rooms').val($rooms);
    $('#total-price').text(finalResult);
    $('#total-price1').text(finalResult);
    $('#slider span').html('<label>' + $area + '</label>');
    $('#slider2 span').html('<label>' + $rooms + '</label>');
    $('#sendarea').val($area);
    $('#sendrooms').val($rooms);
    $('#sendtotal').val(finalResult);
}

function initMap() {
    var myLatLng = {lat: 60.128161, lng: 18.643501};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,

});
 //tabs
    $( function() {
    $( "#tabs" ).tabs();
  } );
}
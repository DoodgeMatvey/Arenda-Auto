// Modals
var modal = document.querySelector('.modal');
var overflow = document.createElement('div');
var exit = document.querySelector('.exit-img');
function openWin() {
    overflow.className = 'overflow';
    document.body.appendChild(overflow);
    var height = modal.offsetHeight;
    modal.style.marginTop = - height / 2 +'px';
    modal.style.top = "50%";
}
overflow.onclick = function () {
    modal.style.top = "-100%";
    overflow.remove();
    document.body.style.overflow = "visible";

}
exit.onclick = function () {
    modal.style.top = "-100%";
    overflow.remove();
    document.body.style.overflow = "visible";
}
$('.navbar-block-fade').click(function(){
  $(".navbar-collapse").toggleClass("navbar-collapse__active");
  $(".navbar-main").toggleClass("navbar-main__border");
});

$(document).ready(function () {
    $("#slider_container").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: false,
        singleItem: true,
        autoplay: true,
        autoplayTimeout : 5000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        navSpeed: 700,
        dots: true,
    });
});
$(function() {
 
$(window).scroll(function() {
    
    if($(this).scrollTop() != 0) {
        
        $('#toTop').fadeIn();
        
    } else {
        
        $('#toTop').fadeOut();
        
    }
        
    });
        
    $('#toTop').click(function() {
        
    $('body,html').animate({scrollTop:0},800);
        
});
    
});
// $('.navbar-block-fade').click(function(){
//     $(".navbar-collapse").toggleClass("navbar-collapse__active");
//   });
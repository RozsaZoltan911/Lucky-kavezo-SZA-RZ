$(document).ready(function(){
$('.slick-slideshow').slick({
    
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow:"<p><ion-icon name='arrow-back-outline' style='font-size: 30px;color: #ffffffff;background-color: #5f5f5f52;padding:10px;border-radius:30px;position: absolute;z-index:30;top:220px;left:10px' class='mobile-arrow-prev'></ion-icon></p>",
    nextArrow:"<ion-icon name='arrow-forward-outline' style='font-size: 30px;color: #ffffffff;background-color: #5f5f5f52;padding:10px;border-radius:30px;position: absolute;z-index:30;top:220px; right:10px'class='mobile-arrow-next'></ion-icon>",

     });
    });

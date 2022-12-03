$(document).ready(function () {
    $(".slider-content").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        nextArrow: '<i class="next-slider fa-solid fa-chevron-left"></i>',
        prevArrow: '<i class="prev-slider fa-solid fa-chevron-right"></i>'
    })
});
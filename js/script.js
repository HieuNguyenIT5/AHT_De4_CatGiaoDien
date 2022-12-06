$(document).ready(function () {
    $(".slider-content").slick({
        autoplay:true,
        autoplaySpeed:2000,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        nextArrow: '<i class="next-slider fa-solid fa-chevron-left"></i>',
        prevArrow: '<i class="prev-slider fa-solid fa-chevron-right"></i>'
    })
    $(".testimonials").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    })
    $("#tab-bar-listing .btn-tab-bar").click(function(){
        $("#tab-bar-listing .btn-tab-bar.selected").removeClass("selected")
        $(this).addClass("selected")
        var active = $("#tab-bar-listing .btn-tab-bar.selected").attr('data')
        switch(active){
            case '1':
                $(".listing .active").removeClass('active')
                $(".listing .top-sellers").addClass('active')
                break;
            case '2':
                $(".listing .active").removeClass('active')
                $(".listing .featured").addClass('active')
                break;
            case '3':
                $(".listing .active").removeClass('active')
                $(".listing .most-reviews").addClass('active')
                break;
        }
    });
});
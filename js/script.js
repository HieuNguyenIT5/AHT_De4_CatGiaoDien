$(document).ready(function () {
    //slider
    $(".slider-content").slick({
        autoplay:true,
        autoplaySpeed:2000,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    })

    //testimonials
    $(".testimonials").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    })

    //select listing
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
    

    //search
    $(".header-right-item.search-click").click(function(){
        $(".header-right-item").hide();
        $(".header-right .search").css({"width":"100%"});
    });

    $(".header-right .hide").click(function(){
        $(".header-right .search").css({"width":"0%"});
        $(".header-right-item").show();
    });
    //navbar respon
    function toggle_navbar_mobile(toogle){
        if(toogle == "show"){
            $(".navbar-overlay").show();
            $(".navbar-mobile").css({"transform": "translateX(0%)"});
        }else{
            $(".navbar-overlay").hide();
            $(".navbar-mobile").css({"transform": "translateX(100%)"});
        }
    }
    $(".header-right .nemu-respon").click(function(){
        toggle_navbar_mobile("show");
    });
    $(".navbar-mobile .btn-close, .navbar-overlay").click(function(){
        toggle_navbar_mobile("hide");
    });
    $(window).resize(function(){
        toggle_navbar_mobile("hide");
    });
});
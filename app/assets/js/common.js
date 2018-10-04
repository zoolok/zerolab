$(document).ready(function (){
    /* --------------------------------------------------------
ANIMATION
----------------------------------------------------------- */

    $('.slide-content').animate({
        'padding-top':150,
        'opacity':1
    },1300);

    $('.slide-content h1').animate({
        'font-size':'6rem'
    },1300);

    $('.top-nav-list li a').animate({
        'left':0
    },'ease');
    /* --------------------------------------------------------
BRAZZERS-CAROUSEl
----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ($(".project-images").length > 0) {
            $(".project-images").brazzersCarousel();
        }
    });
    /* --------------------------------------------------------
PHONE MASK
----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ($(".phone").length > 0) {
            $(".phone").mask("+7(999) 999-99-99");
        }
    });

    /* --------------------------------------------------------
POPUP
----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ($(".popup-overlay").length > 0) {
            $('[data-action="popup"]').click(function (e) {
                e.preventDefault();
                $(".popup-overlay").addClass('show');
            });
            $('.close').click(function (e) {
                e.preventDefault();
                $(".popup-overlay").removeClass('show');
            });
        }
    });
    /* --------------------------------------------------------
TABS
----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ($(".tabs").length > 0) {
            $('.tabs li').click(function (e) {
                e.preventDefault();
                var c = $(this).attr('data-tab');

                $(".tabs li").each(function (index) {
                    $(this).removeClass('active');
                });

                $(this).addClass('active');

                $('[class^="tab-item-"]').each(function (index) {
                    $(this).removeClass('curent');
                });

                $('.tab-item-' + c).addClass('curent');
            });
        }
    });
    /* --------------------------------------------------------
HOVER IMAGES
----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ($(".serv-item-inner").length > 0) {
            $('.serv-item-inner').hover(
                function(){
                    var curImg = $(this).children('img').attr('src');
                    var hovImg = $(this).children('img').attr('data-hover');
                    $(this).children('img').attr('src',hovImg);
                    $(this).children('img').attr('data-hover',curImg);

                },
                function(){
                    var curImg = $(this).children('img').attr('src');
                    var hovImg = $(this).children('img').attr('data-hover');
                    $(this).children('img').attr('src',hovImg);
                    $(this).children('img').attr('data-hover',curImg);
                });
        }
    });
    /* --------------------------------------------------------
LAVALAMP
----------------------------------------------------------- */
    $(function() {
        $('.inner .top-nav-list').lavaLamp({
            speed: 500,
            returnDelay:500
        });
    });
    /* --------------------------------------------------------
    INDEX  SLIDERS
    ----------------------------------------------------------- */
    $(function () {
        "use strict";
        if ($(".top-slider").length > 0) {

            $('.top-slider').owlCarousel({
                items: 1,
                nav: true,
                navText: ["", ""],
                dots: true,
                loop: true,
                center: true,
                autoplay:0/*,
                animateIn:'fadeInRight',
                animateOut:'fadeOut'*/
            });
        }
        if ($("#cascade-slider").length > 0) {

            $('#cascade-slider').cascadeSlider({
                itemClass: 'cascade-slider_item',
                arrowClass: 'cascade-slider_arrow'
            });

            var item = $("#cascade-slider").find('.cascade-slider_item');
            var itemCount = item.length;

            $('.summ').html('0' + itemCount);

            $('.cascade-slider_arrow').click(function (e) {

                e.preventDefault();

                console.log(itemCount);

                var c = $(".cascade-slider_slides").find(".now");
                var n = c.attr('data-slide-number');

                console.log(n);

                var s = parseInt(n);

                console.log(s);

                $('.cur').html('0' + (s + 1));

                $('[class^="project-wrap-"]').each(function (index) {
                    if ($(this).hasClass('active')){
                        $(this).removeClass('active');
                    }
                    if ($(this).hasClass('project-wrap-' + n)){
                        $(this).addClass('active');
                    }
                });
            })
        }
    });
});

/* --------------------------------------------------------
GOOGLE MAP
----------------------------------------------------------- */

function initMap(xMap,yMap) {

    if(!xMap || !yMap){
        xMap = 56.296545;
        yMap = 44.065512;
    }

    var centerLatLng = new google.maps.LatLng(xMap, yMap);
    var mapOptions = {
        center: centerLatLng,
        disableDefaultUI: true,
        //mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 17,
        styles:[
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "gamma": 0.5
                    }
                ]
            }
        ]
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Добавляем маркер
    var marker = new google.maps.Marker({
        position: centerLatLng,
        map: map,
        title: "ZeroLab",
        icon: "https://zoolok.github.io/projects/sms59/assets/images/position-marker.png"
    });
}
google.maps.event.addDomListener(window, "load", initMap);

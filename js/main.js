/* INDEX PAGE - CAROUSEL START  */

jQuery(document).ready(function ($) {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [1000, 1],
        itemsTablet: [767, 1],
        pagination: false,
        navigation: true,
        navigationText: ["", ""],
        slideSpeed: 1000,
        autoPlay: false
    });

    /* INDEX PAGE - CAROUSEL END  */

    /* INDEX PAGE - DATETIMEPICKER START  */

    $('.form_date').datetimepicker({
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
    $('.form_time').datetimepicker({
        language: 'fr',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 1,
        minView: 0,
        maxView: 1,
        forceParse: 0
    });

    /* INDEX PAGE - DATETIMEPICKER END  */

    /* BLOG SINGLE PAGE -  FANCY BOX START  */

    $("#fancybox1,#fancybox2,#fancybox3,#fancybox4").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        helpers: {
            title: {
                type: 'inside'
            }
        }

    });

    /* BLOG SINGLE PAGE -  FANCY BOX END  */


    





});


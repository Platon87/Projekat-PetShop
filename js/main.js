
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
});

/* FANCY BOX - BLOG SINGLE START  */

 $("#fancybox1,#fancybox2,#fancybox3,#fancybox4").fancybox({
          openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}

});

/* FANCY BOX - BLOG SINGLE END  */
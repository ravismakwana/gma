// import './clock';
// import './carousel';
import './menu';
import './woo';
// import './posts/loadmore';

// Styles
import '../sass/main.scss';

// Images
// import '../img/patterns/bg.jpeg';
// import '../img/patterns/c1-150x150.jpeg';
// import '../img/patterns/c2-150x150.jpeg';
// import '../img/patterns/c3-150x150.jpeg';
// import '../img/email.webp';
// import '../img/payment.webp';
// import '../img/secure-with-macfee.webp';

jQuery(document).ready(function() {	
	/* Trust Pilot Review Slider */
    jQuery(".review_slider").owlCarousel({
        items: 2, //10 items above 1000px browser width
        itemsDesktop: [1024, 2], //5 items between 1024px and 901px
        itemsDesktopSmall: [768, 2], // 3 items betweem 900px and 601px
        itemsTablet: [767, 2],
		itemsTablet: [545, 1],//2 items between 600 and 0;
        itemsMobile: [360, 1],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });
});

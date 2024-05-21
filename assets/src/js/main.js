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

import '../img/secure-with-macfee.webp';

jQuery(document).ready(function($) {	
	/* Trust Pilot Review Slider */
    $('.review_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
});


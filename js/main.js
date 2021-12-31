(function ($) {
	$('.owl-carousel-banner').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:10000,
		smartSpeed: 1000,		
		slideSpeed : 10000,
		touchDrag  : true,
		mouseDrag  : true,
		dots: true,
		nav: true,
		responsiveClass:true,
		responsive:{
			1366:{
				items:1,
			},
			1024:{
				items:1,
			},
			768:{
				items:1,
			},
			640:{
				items:1,
			},
			0:{
				items:1,
			}
		}
	})

$('.owl-carousel-review').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:10000,
		smartSpeed: 1000,		
		slideSpeed : 10000,
		touchDrag  : true,
		mouseDrag  : true,
		dots: false,
		nav: true,
		responsiveClass:true,
		responsive:{
			1366:{
				items:1,
			},
			1024:{
				items:1,
			},
			768:{
				items:1,
				dots: true,
				nav: false,
			},
			640:{
				items:1,
				dots: true,
				nav: false,
			},
			0:{
				items:1,
				dots: true,
				nav: false,
			}
		}
	})
	$('.owl-carousel-news').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:10000,
		smartSpeed: 1000,		
		slideSpeed : 10000,
		touchDrag  : true,
		mouseDrag  : true,
		dots: false,
		nav: true,
		responsiveClass:true,
		responsive:{
			1366:{
				items:3,
			},
			1024:{
				items:3,
			},
			768:{
				items:2,
				dots: true,
				nav: false,
			},
			640:{
				items:1,
				dots: true,
				nav: false,
			},
			0:{
				items:1,
				dots: true,
				nav: false,
			}
		}
	})
	
})(jQuery);

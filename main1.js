$(document).ready(function() {
	"use strict";

	var window_width = $(window).width(),
		window_height = window.innerHeight,
		header_height = $(".default-header").height(),
		header_height_static = $(".site-header.static").outerHeight(),
		fitscreen = window_height - header_height;


	$('.active-testimonial-carusel').owlCarousel({
		items: 2,
		loop: true,
		margin: 15,
		autoplayHoverPause: true,
		smartSpeed:500,
		dots: true,
		autoplay: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1,
			},
			992: {
				items: 2,
			}
		}
	});


	$('.active-brand-carusel').owlCarousel({
		items: 5,
		loop: true,
		autoplayHoverPause: true,
		smartSpeed:500,
		autoplay: true,
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 3,
			},
			991: {
				items: 4,
			},
			1024: {
				items: 5,
			}
		}
	});



	$('.img-gal').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});})
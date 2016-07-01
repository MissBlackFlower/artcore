$(document).ready(function() {

	$('.gallery__conteiner').slick({
	dots: false,
	arrows: false,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 4000,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: true,
	fade: true,
  cssEase: 'linear'
	});

	$('.js-toggle-link').on('click', function(){
			var	parent = $('.sidebar__menu');
			var link = $(this).parent('.sidebar__cell');
			var child = parent.find('.is-active');
			var	navPrev = parent.find('.sidebar__submenu');
			var	navActive = $(this).next('.sidebar__submenu');
			if (child.hasClass('is-active')) {
				navPrev.slideUp(700);
				child.removeClass('is-active');
				link.addClass('is-active');
				navActive.slideDown(700);
				return false;
			} else {
				link.addClass('is-active');
				navActive.slideDown(700);
			}
		return false
		});




});

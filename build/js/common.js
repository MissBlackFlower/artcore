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
			var link = $(this).parent('li');
			var child = parent.find('.is-active');
			var	navPrev = parent.find('.sidebar__submenu');
			var	navActive = $(this).next('ul');
			if (child.hasClass('is-active')) {
				navPrev.slideUp(700);
				child.removeClass('is-active');
				link.addClass('is-active');
				navActive.slideDown(700);
			} else {
				link.addClass('is-active');
				navActive.slideDown(700);
			}
		return false
		});


	$('.btn-menu').on('click', function(){
		var menu = $('.header__menu');
		menu.toggleClass('open-menu')
	});
	$('.btn-nav').on('click', function(){
		var menu = $('.header__nav');
		menu.toggleClass('open-nav')
	});
	$('.types__btn').on('click', function(){
		var list = $('.types__list');
		if (list.css('display') == 'none')
        {
            list.animate({height: 'show'}, 800);
        }
    else
        {
            list.animate({height: 'hide'}, 800);
        }
			return false;
	});
	$('.content__btn').on('click', function(){
		var list = $('.sidebar__menu');
		if (list.css('display') == 'none')
        {
            list.animate({height: 'show'}, 800);
        }
    else
        {
            list.animate({height: 'hide'}, 800);
        }
			return false;
	});

});

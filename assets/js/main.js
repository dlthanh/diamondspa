$(function() {
    var banner = new Swiper('.banner', {
        speed: 600,
        slidesPerView: 1,
        pagination: {
            el: '.banner-pagination'
        },
        navigation: {
            nextEl: '.banner-next',
            prevEl: '.banner-prev',
        }

    });
    banner.on('slideChange', function() {
        new WOW().init();
    });

    new WOW().init();

    var service = new Swiper('.service-slider', {
        speed: 600,
        slidesPerView: 1,
        pagination: {
            el: '.service-pagination'
        },
        navigation: {
            nextEl: '.service-next',
            prevEl: '.service-prev',
		}
    });
	
	var technical = new Swiper('.technical-slider', {
		speed: 600,
        slidesPerView: 'auto',
		spaceBetween: 30,
		autoplay: true,
		pagination: {
            el: '.technical-pagination'
        }
	})

    var technical = new Swiper('.technical-slider', {
        speed: 600,
        slidesPerView: 'auto',
        spaceBetween: 30,
        // autoplay: true,
        pagination: {
            el: '.technical-pagination'
        },
        breakpoints: {
            768: {
                spaceBetween: 0
            }
        }
    });

    $('.button-phone').click(function() {
        $('.show-phone').toggleClass('show')
    });

    var url = 'https://docs.google.com/forms/d/e/1FAIpQLSdqQGaMUrezKDsUE5sriMy9YrKhUtKAtiiIDIoqVCeHeG-EGw/formResponse';
    url = btoa(url);
    $('#contact-submit').click(function(e) {
        e.preventDefault();
        var name = $(this).parent().find('#name').val(),
            phone = $(this).parent().find('#phone').val(),
            problem = $(this).parent().find('#problem').val();
        $.ajax({
            url: atob(url),
            type: 'POST',
            dataType: "xml",
            data: {
                'entry.683045596': name,
                'entry.578315256': phone,
                'entry.1948422046': problem
            }
        });
        setTimeout(function() {
            $('.success').fadeIn(300).delay(1000).fadeOut(300);
        }, 1000)
    });

    $('.banner-form_submit').click(function(e) {
        e.preventDefault();
        var phone = $(this).parent().find('.banner-form_input').val();
        $.ajax({
            url: atob(url),
            type: 'POST',
            dataType: "xml",
            data: {
                'entry.578315256': phone
            }
        })
    });

    $('.banner-link').click(function(e) {
        e.preventDefault();
        var link = $(this).attr('href'),
            offsettop = $(link).offset().top - 135;
        $('html, body').animate({scrollTop: offsettop}, 600, 'swing');
    })
	
	$('.nav-link').click(function(e) {
		e.preventDefault();
		$('.nav-link').parent().removeClass('active');
		$(this).parent().addClass('active');
		var link = $(this).attr('href');
		if(link == '#home') {
			$('html, body').animate({scrollTop: 0}, 600, 'swing');
		} else {
			var offsettop = $(link).offset().top - 135;
			$('html, body').animate({scrollTop: offsettop}, 600, 'swing');
		}
		
		if($(this).data('slide') == '1') {
			service.slideTo(0, 0);
		}
		
		if($(this).data('slide') == '2') {
			service.slideTo(1, 0);
		}
	})
});

    var posY;
(function ($) {

    //isotope.js $(document).ready( function() { $('.portfolio_item_wrap').isotope({ itemSelector: '.portfolio_item', }); 
    // filter items on button click $('.btn_set').on( 'click', 'li', function() { var filterValue = $(this).children().attr('data-filter'); $('.portfolio_item_wrap').isotope({ filter: filterValue }); $('.btn_set li').removeClass('on'); $(this).addClass('on'); }); })



    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
	
    $(document).on('click','.blm_open_button',function(){
    
        posY = $(window).scrollTop();
        $('html,body').addClass('not-scroll');

        $('#wrap').css('top',-posY);
        $('.blm_layerPop').toggleClass('active');
        $('.bc_layerbg').addClass('active');
        
        var galleryThumbs = new Swiper('.blm_main_thumbs', {
            autoHeight : true,
            autoplay : false,
            arrow:true,
            slideToClickedSlide: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }
        });
        
        return false;
    });
    
    $(document).on('click','.blm_layer_btn',function(){
		closePopFreeDelivery();
		return false;
    });

    $(document).on('click','div[name=btn_chargeClose]',function(){
		closePopFreeDelivery();
		return false;
    });
                    
	var closePopFreeDelivery = function () {
        $('html,body').removeClass('not-scroll');
        $('.bc_layerbg,.blm_layerPop').removeClass('active');

        $('#wrap').css('top', 'auto');
        posY = $(window).scrollTop(posY);
        
        return false;
	}


})(jQuery);


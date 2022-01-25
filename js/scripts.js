/*==================================
 * Author: https://themeforest.net/user/ka_boldbaatar
 * Template Name : Cono is a responsive creative template
 * Version       : 1.0
 ==================================== */

/*=========== TABLE OF CONTENTS ===========
 1. preloader
 2. client testimonial slider
 3. customers slider
 4. home page slider
 5. Lightbox popup
 6. filter items
 7. Portfolio Isotope
 8. video popup
 ===========*/

(function($) {
    'use strict';

    //preloader
    $(window).ready(function() {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut('slow');
    });

    //client testimonial slider
    $('.client-testimonial').owlCarousel({
        items:1,
        loop:true,
        dots: true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5500,
        autoplayStopOnLast: false
    });

    //customers slider
    $('.customers-slider').owlCarousel({
        responsiveClass:true,
        margin:30,
        dots: false,
        autoplay: 2000,
        loop: false,
        autoplayStopOnLast: false,
        autoWidth:false,
        nav:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            800:{
                items:4
            },
            1200:{
                items:5
            }

        }

    });

    //home page slider

    $('.content-text-slider').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

    });

    $('.biz-hero-slider').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        dots: false,
        nav: true,
        autoplayTimeout:3400,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

    });


    //Lightbox popup

    $('.lightbox-gallery').magnificPopup({
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        },
        image: {
            titleSrc: 'title',
            verticalFit: true
        }
    });


    $('.lightbox-video').magnificPopup();
    $('.lightbox-product').magnificPopup({
        tLoading: 'Loading image #%curr%...',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        },
        image: {
            titleSrc: 'title',
            verticalFit: true
        }
    });

    // filter items
    $('.button-group').on( 'click', 'a', function(e) {
        e.preventDefault();
        var filterValue = $(this).attr('data-filter');
        $portfolio.isotope({ filter: filterValue });

        $('.button-group a').removeClass('active');
        $(this).closest('a').addClass('active');

    });

    // Portfolio Isotope
    var $portfolio = $('#project-container');
    $portfolio.imagesLoaded( function() {
        $portfolio.isotope({
            isOriginLeft: true
        });
        $portfolio.isotope();
    });
    $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();   
    });

    //Sidebar
    $('#sidebar').on('click',function(){
          $('.aside').asidebar('open');
      });

    //video popup
    $('.video').magnificPopup({
        type: 'iframe'
    });
    (function () {
        var typed = new Typed('#typed', {
            stringsElement: '#typed-strings',
            typeSpeed: 20,
            backSpeed: 20,
            startDelay: 1000,
            loop: true,
            loopCount: Infinity
        });

    }());

})(jQuery);
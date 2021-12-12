;(function ($) {
    "use strict";
    $(document).on('ready', function () {
        
        $('.related-posts').slick({
            dots          : false,
            arrows        : true,
            prevArrow     : '<button class="slick-prev"  type="button"><i class="fa fa-angle-left"></i></button>',
            nextArrow     : '<button class="slick-next" type="button"><i class="fa fa-angle-right"></i></button>',
            infinite      : true,
            centerMode    : false,
            speed         : 1000,
            slidesToShow  : 3,
            slidesToScroll: 1,
            responsive    : [
                {
                    breakpoint: 1170,
                    settings  : {
                        slidesToShow  : 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings  : {
                        slidesToShow  : 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings  : {
                        slidesToShow  : 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        
        $('#mainmenu').slicknav({
            label       : '',
            duration    : 500,
            prependTo   : '',
            closedSymbol: '<i class="fa fa-angle-right"></i>',
            openedSymbol: '<i class="fa fa-angle-right"></i>',
            appendTo    : '.mainmenu-area',
            menuButton  : '#menu-button',
            closeOnClick: 'true'                                // Close menu when a link is clicked.
        });
        
        if (typeof imagesLoaded == 'function') {
            $('.masonrys > div').addClass('masonry-item');
            var $boxes = $('.masonry-item');
            $boxes.hide();
            var $container = $('.masonrys');
            $container.imagesLoaded(function () {
                $boxes.fadeIn();
                $container.masonry({
                    itemSelector: '.masonry-item',
                });
            });
        }
        // Select all links with hashes
        $('.mainmenu-area .primary-menu a[href*="#"]')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .on('click',function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
        });
    });
    /* Preloader Js
    ===================*/
    $(window).on("load", function () {
        $('.preloader').fadeOut(500);
        $('.primary-menu .sub-menu .sub-menu').parent('li').append('<i class="fas fa-caret-right"></i>');
        $(".post-single").fitVids();
    });
})(jQuery);
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */
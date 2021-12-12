;
(function ($) {
    var WidgetgrowthcoreCarouselHandler = function ($scope, $) {
        var carousel_elem = $scope.find('.growthcore-carousel-activation').eq(0);
        if (carousel_elem.length > 0) {
            var settings = carousel_elem.data('settings');
            var arrows = settings['arrows'];
            var arrow_prev_txt = settings['arrow_prev_txt'];
            var arrow_next_txt = settings['arrow_next_txt'];
            var dots = settings['dots'];
            var autoplay = settings['autoplay'];
            var autoplay_speed = parseInt(settings['autoplay_speed']) || 3000;
            var animation_speed = parseInt(settings['animation_speed']) || 300;
            var pause_on_hover = settings['pause_on_hover'];
            var center_mode = settings['center_mode'];
            var vertical_mode = settings['vertical_mode'];
            var center_padding = settings['center_padding'] ? settings['center_padding'] : '50px';
            var display_columns = parseInt(settings['display_columns']) || 1;
            var scroll_columns = parseInt(settings['scroll_columns']) || 1;
            var tablet_width = parseInt(settings['tablet_width']) || 800;
            var tablet_display_columns = parseInt(settings['tablet_display_columns']) || 1;
            var tablet_scroll_columns = parseInt(settings['tablet_scroll_columns']) || 1;
            var mobile_width = parseInt(settings['mobile_width']) || 480;
            var mobile_display_columns = parseInt(settings['mobile_display_columns']) || 1;
            var mobile_scroll_columns = parseInt(settings['mobile_scroll_columns']) || 1;
            var carousel_style_ck = parseInt(settings['carousel_style_ck']) || 1;
            if (carousel_style_ck == 4) {
                carousel_elem.slick({
                    arrows: arrows
                    , prevArrow: '<button class="growthcore-carosul-prev"><i class="' + arrow_prev_txt + '"></i></button>'
                    , nextArrow: '<button class="growthcore-carosul-next"><i class="' + arrow_next_txt + '"></i></button>'
                    , dots: dots
                    , customPaging: function (slick, index) {
                        var data_title = slick.$slides.eq(index).find('.growthcore-data-title').data('title');
                        return '<h6>' + data_title + '</h6>';
                    }
                    , infinite: true
                    , autoplay: autoplay
                    , autoplaySpeed: autoplay_speed
                    , speed: animation_speed
                    , fade: false
                    , pauseOnHover: pause_on_hover
                    , slidesToShow: display_columns
                    , slidesToScroll: scroll_columns
                    , centerMode: center_mode
                    , vertical: vertical_mode
                    , verticalSwiping: vertical_mode
                    , centerPadding: center_padding
                    , responsive: [
                        {
                            breakpoint: tablet_width
                            , settings: {
                                slidesToShow: tablet_display_columns
                                , slidesToScroll: tablet_scroll_columns
                            }
                        }
                        , {
                            breakpoint: mobile_width
                            , settings: {
                                slidesToShow: mobile_display_columns
                                , slidesToScroll: mobile_scroll_columns
                            }
                        }
                    ]
                });
            }
            else {
                carousel_elem.slick({
                    arrows: arrows
                    , prevArrow: '<button class="slick-prev"><i class="' + arrow_prev_txt + '"></i></button>'
                    , nextArrow: '<button class="slick-next"><i class="' + arrow_next_txt + '"></i></button>'
                    , dots: dots
                    , infinite: true
                    , autoplay: autoplay
                    , autoplaySpeed: autoplay_speed
                    , speed: animation_speed
                    , fade: false
                    , pauseOnHover: pause_on_hover
                    , slidesToShow: display_columns
                    , slidesToScroll: scroll_columns
                    , centerMode: center_mode
                    , vertical: vertical_mode
                    , verticalSwiping: vertical_mode
                    , centerPadding: center_padding
                    , responsive: [
                        {
                            breakpoint: tablet_width
                            , settings: {
                                slidesToShow: tablet_display_columns
                                , slidesToScroll: tablet_scroll_columns
                            }
                        }
                        , {
                            breakpoint: mobile_width
                            , settings: {
                                slidesToShow: mobile_display_columns
                                , slidesToScroll: mobile_scroll_columns
                            }
                        }
                    ]
                });
            }
        }
    }
    var WidgetgrowthcorePortfolioHandler = function ($scope, $) {
        // Portfolio Image Loded with Masonry
        var PortfolioMasonry = $('.grid-portfolios');
        if (typeof imagesLoaded == 'function') {
            imagesLoaded(PortfolioMasonry, function () {
                setTimeout(function () {
                    PortfolioMasonry.isotope({
                        itemSelector: '.portfolio-grid'
                        , resizesContainer: false
                        , layoutMode: 'masonry'
                        , filter: '*'
                    });
                }, 500);
            });
        };
        // Set Active Class for Portfolio filter
        $('.portfolio-filter-menu li').on('click', function (event) {
            $('.portfolio-filter-menu li').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
        // Filter JS for Porrtfolio
        $('.portfolio-filter-menu').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            PortfolioMasonry.isotope({
                filter: filterValue
            });
        });
    }
    var WidgetgrowthcoreParallaxHandler = function ($scope, $back) {
        var prallax_settings = $scope.find('.element-prallax').eq(0);
        if (prallax_settings.length > 0) {
            var prallax_settings = prallax_settings.data('load');
            var parallx_speed = prallax_settings['parallx_speed'];
            $(window).scroll(function () {
                var scrollTop = $(window).scrollTop();
                var evenImgPos = scrollTop / parallx_speed + 'px';
                $('.xunbur-ex-element.element-prallax').find(".item").css('transform', 'translateY(' + evenImgPos + ')');
            });
        }
    }
    var WidgetgrowthcoreLoadmoreHandler = function ($scope, $back) {
        var loaded_elem = $scope.find('.load-more-content').eq(0);
        if (loaded_elem.length > 0) {
            var settings = loaded_elem.data('load');
            var loaded_item = settings['loaded_item'];
            var load_slice = settings['load_slice'];
            $('.load-more-content').each(function () {
                $(this).children('div:not(.load-button)').addClass('load-item');
                $(this).find(".load-item").hide();
                $(this).find(".load-item").slice(0, loaded_item).show();
                $(this).find(".load-more").on('click', function (e) {
                    e.preventDefault();
                    $(this).parent().siblings(".load-item:hidden").slice(0, load_slice).slideDown(500);
                    if ($(this).parent().siblings(".load-item:hidden").length == 0) {
                        $(this).fadeOut('slow');
                    }
                    $('html,body').animate({
                        scrollTop: $(this).offset().top
                    }, 1500);
                });
            });
        }
    };
    
    // Particle Handler
    var growthParticleHandler = function ($section, $) {
        $.each($section, function( index ) {
            var sectionID  = $section.data('id');
            var particleID = 'particle-'+sectionID;
            var particle_class = $('.particle-no-'+sectionID);
            var particle_elem = particle_class.data('particle');
            var $this = $(this);
            if ($this.hasClass('particle-active')) {
                particlesJS( particleID, particle_elem );
            }
        });
    }
    
    // Run this code under Elementor.
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/growth-carousel-addons.default', WidgetgrowthcoreCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/growth-product-addons.default', WidgetgrowthcoreCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/growth-team-addons.default', WidgetgrowthcoreCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/growth-qualifi-more-box.default', WidgetgrowthcoreCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/growth-postcarousel-addons.default', WidgetgrowthcoreCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/growth-testimonial-addons.default', WidgetgrowthcoreCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/growthcore-portfolio-addons.default', WidgetgrowthcoreCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/growthcore-portfolio-addons.default', WidgetgrowthcorePortfolioHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/growth-position_element.default', WidgetgrowthcoreParallaxHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/growth-qualifi-more-box.default', WidgetgrowthcoreLoadmoreHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/growth-feature-more-box.default', WidgetgrowthcoreLoadmoreHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/growth-feature-more-box.default', WidgetgrowthcoreCarouselHandler);
        elementorFrontend.hooks.addAction( 'frontend/element_ready/section', growthParticleHandler );
    });
}(jQuery));
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */
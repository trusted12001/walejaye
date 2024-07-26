;
(function ($) {
    'use strict'

    /*--
        Off Canvas Menu
	-----------------------------------*/

    /*Variables*/
    var $offCanvasNav = $('.canvas-menu'),
    $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu, .mega-sub-menu, .menu-item ');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="mobile-menu-expand"></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .mobile-menu-expand, li .menu-title', function(e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('mobile-menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active-expand');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active-expand');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.closest('li').siblings('li').removeClass('active-expand');
                $this.siblings('ul').slideDown();
            }
        }
    });

    $( ".sub-menu, .mega-sub-menu, .menu-item" ).parent( "li" ).addClass( "menu-item-has-children" );
    $( ".mega-sub-menu" ).parent( "li" ).css( "position", "static" );



    /* ----------------------------
	   wow js active
	  ------------------------------ */
    new WOW().init()

    // click //
    $('.maincart-wrap a').on('click', function () {
        $('.cart').toggle()
    })

    /* ----------------------------
	   owl active
	  ------------------------------ */
    // nivo slider ////
    $('#slider-active').nivoSlider({
        directionNav: true,
        animSpeed: 1000,
        slices: 18,
        pauseTime: 5000,
        pauseOnHover: false,
        manualAdvance: false,
        controlNav: false,
        prevText: '<i class="fa fa-long-arrow-left nivo-prev-icon"></i>',
        nextText: '<i class="fa fa-long-arrow-right nivo-next-icon"></i>'
    })
    // nivo slider ////

    /* ---------------------
	  countdown
	  --------------------- */
    $('[data-countdown]').each(function () {
        var $this = $(this)

        var finalDate = $(this).data('countdown')
        $this.countdown(finalDate, function (event) {
            $this.html(
                event.strftime(
                    '<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'
                )
            )
        })
    })

    // product slider ////
    $('.product-active').owlCarousel({
        smartSpeed: 1000,
        margin: 30,
        nav: true,
        navText: [
            '<i class="fa fa-long-arrow-left"></i>',
            '<i class="fa fa-long-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })

    // tab slider ////
    $('.tab-active').owlCarousel({
        smartSpeed: 1000,
        margin: 0,
        nav: true,
        dots: false,
        navText: [
            '<i class="fa fa-long-arrow-left"></i>',
            '<i class="fa fa-long-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    })

    // test slider ////
    $('.test-active').owlCarousel({
        smartSpeed: 1000,
        margin: 0,
        nav: true,
        navText: [
            '<i class="fa fa-long-arrow-left"></i>',
            '<i class="fa fa-long-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    // blog slider ////
    $('.blog-active').owlCarousel({
        smartSpeed: 1000,
        margin: 30,
        nav: true,
        navText: [
            '<i class="fa fa-long-arrow-left"></i>',
            '<i class="fa fa-long-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })

    // brand-active///
    $('.brand-active').owlCarousel({
        smartSpeed: 1000,
        margin: 0,
        nav: true,
        navText: [
            '<i class="fa fa-long-arrow-left"></i>',
            '<i class="fa fa-long-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            768: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    })

    /* --------------------------------
	  home two js here
	  --------------------------------------- */
    // featureproduct-slider-active///
    $('.featureproduct-slider-active').owlCarousel({
        smartSpeed: 1000,
        margin: 0,
        nav: true,
        navText: [
            '<i class="fa fa-long-arrow-left"></i>',
            '<i class="fa fa-long-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    })
    /* --------------------------------
	  home two js here
	  --------------------------------------- */
    // featureproduct-slider-active///
    $('.featureproduct-slider-active2').owlCarousel({
        smartSpeed: 1000,
        margin: 0,
        nav: true,
        navText: [
            '<i class="fa fa-long-arrow-left"></i>',
            '<i class="fa fa-long-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })

    // new-product-slider-active///
    $('.new-product-slider-active').owlCarousel({
        smartSpeed: 1000,
        margin: 0,
        nav: true,
        navText: [
            '<i class="fa fa-long-arrow-left"></i>',
            '<i class="fa fa-long-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 1
            }
        }
    })

    /* --------------------------------
	  home three js here
	  --------------------------------------- */
    // home3-blog-active///
    $('.home3-blog-active').owlCarousel({
        smartSpeed: 1000,
        margin: 30,
        nav: true,
        navText: [
            '<i class="fa fa-long-arrow-left"></i>',
            '<i class="fa fa-long-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })

    /* --------------------------------
	  home three js here
	  --------------------------------------- */
    // Drinks-active///
    $('.drinks-active').owlCarousel({
        smartSpeed: 1000,
        margin: 0,
        nav: true,
        dots: false,
        navText: [
            '<i class="fa fa-long-arrow-left"></i>',
            '<i class="fa fa-long-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    })

    /* --------------------------------
	  shop js here
	  --------------------------------------- */
    // Drinks-active///
    $('.mostviewed-slider-active').owlCarousel({
        smartSpeed: 1000,
        margin: 0,
        nav: true,
        navText: [
            '<i class="fa fa-long-arrow-left"></i>',
            '<i class="fa fa-long-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })
    /* --------------------------------
	  blog js here
	  --------------------------------------- */
    // Drinks-active///
    $('.single-blog-active').owlCarousel({
        smartSpeed: 1000,
        margin: 0,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-long-arrow-left"></i>',
            '<i class="fa fa-long-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    // single-protfolio-active///
    $('.single-product-active').owlCarousel({
        smartSpeed: 1000,
        margin: 0,
        nav: false,
        navText: [
            '<i class="fa fa-long-arrow-left"></i>',
            '<i class="fa fa-long-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 3
            },
            576: {
                items: 4
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            }
        }
    })

    /*--------------------------
      tab active
      ---------------------------- */
    var ProductDetailsSmall = $('.single-product-active .single-img a');

    ProductDetailsSmall.on('click', function (e) {
        e.preventDefault();

        var $href = $(this).attr('href');

        ProductDetailsSmall.removeClass('active');
        $(this).addClass('active');

        $('.single-product-tab .tab-content .tab-pane').removeClass('active');
        $('.single-product-tab .tab-content ' + $href).addClass('active');
    })








    // cart-active///
    $('.cart-active').owlCarousel({
        smartSpeed: 1000,
        margin: 15,
        nav: true,
        navText: [
            '<i class="fa fa-long-arrow-left"></i>',
            '<i class="fa fa-long-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })

    // click function//////////
    $('.opener-1').on('click', function () {
        $('.toggle-1').slideToggle(500)
    })
    $('.opener-2').on('click', function () {
        $('.toggle-2').slideToggle(500)
    })

    /* login form click */
    $('.login-form-click').on('click', function () {
        $('.login-form').slideToggle(500)
    })

    // /// show-code///
    $('.code').on('click', function () {
        $('.code-form').slideToggle(500)
    })

    // /// Account password///
    $('.show-password').on('click', function () {
        $('.account-password').slideToggle(500)
    })

    /* ----------------------------
	   price-slider active
    ------------------------------ */
    $('#slider-range').slider({
        range: true,
        min: 40,
        max: 600,
        values: [0, 600],
        slide: function (event, ui) {
            $('#amount').val('$' + ui.values[0] + ' - $' + ui.values[1])
        }
    })

    $('#amount').val(
        '$' +
        $('#slider-range').slider('values', 0) +
        ' - $' +
        $('#slider-range').slider('values', 1)
    )

    /* --------------------------
	   scrollUp
    ---------------------------- */
    var btn = $('#backBTn');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.fadeIn();
        } else {
            btn.fadeOut();
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });


    /* --
	  Magnific Popup
    ------------------------ */
    $('.popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    })


})(jQuery)
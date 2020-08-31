$(document).ready(function () {

    $('.burger').click(function () {
        $(this).toggleClass('is-active');
        $('.dropdown-menu').toggleClass('is-active');
    });

    $(".mob-nav>li").click(function () {
        var $this = $(this);
        var elem = $(this).find('.mob-nav__inner');
        if (!$this.hasClass("is-active")) {
            $(".mob-nav__inner").slideUp();
            $(".mob-nav>li").removeClass("is-active");
        }
        $this.toggleClass("is-active");
        elem.slideToggle();
    });

    var bannerSlider = new Swiper('.banner-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-bs',
            prevEl: '.swiper-button-prev-bs',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var aboutSliser = undefined;

    function initAction() {
        var screenWidth = $(window).width();
        if (screenWidth > 991 && aboutSliser == undefined) {
            var aboutSliser = new Swiper('.about-slider', {
                slidesPerView: '3',
                spaceBetween: 35,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next-as',
                    prevEl: '.swiper-button-prev-as',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    1599: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    }
                }
            });
        } else if (screenWidth < 992 && aboutSliser != undefined) {
            aboutSliser.destroy();
            aboutSliser = undefined;
            // $('.scrollbar-slider__wrapper').removeAttr('style');
            // $('.scrollbar-slider__slide').removeAttr('style');
        }
    }

    initAction();

    var advSliser = undefined;

    function initAdvSlider() {
        var screenWidth = $(window).width();
        if (screenWidth < 1280 && advSliser == undefined) {
            var advSliser = new Swiper('.adv-slider', {
                slidesPerView: '1',
                spaceBetween: 35,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    767: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1279: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    }
                }
            });
        } else if (screenWidth > 1279 && advSliser != undefined) {
            advSliser.destroy();
            advSliser = undefined;
        }
    }

    initAdvSlider();

    $(window).on('resize', function () {
        initAction();
    });

});

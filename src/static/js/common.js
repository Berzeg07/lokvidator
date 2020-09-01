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

    $(".phone-inp").mask("+7(999)999-99-99");

    $('.select-loan select').selectric();

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

    var teamSlider = new Swiper('.team-slider', {
        slidesPerView: 3,
        spaceBetween: 155,
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next-ts',
            prevEl: '.swiper-button-prev-ts',
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
            1899: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
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

    var choiceSliser = undefined;

    function initChoiceAction() {
        var screenWidth = $(window).width();
        if (screenWidth > 767 && choiceSliser == undefined) {
            var choiceSliser = new Swiper('.choice-slider', {
                slidesPerView: '5',
                spaceBetween: 55,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next-ch',
                    prevEl: '.swiper-button-prev-ch',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1279: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1599: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    }
                }
            });
        } else if (screenWidth < 768 && choiceSliser != undefined) {
            choiceSliser.destroy();
            choiceSliser = undefined;
            // $('.scrollbar-slider__wrapper').removeAttr('style');
            // $('.scrollbar-slider__slide').removeAttr('style');
        }
    }

    initChoiceAction();

    // $(window).on('resize', function () {
    //     initAction();
    // });

});

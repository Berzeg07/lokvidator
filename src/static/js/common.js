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

});

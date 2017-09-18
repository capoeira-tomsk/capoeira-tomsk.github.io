$(function () {
    $(document).on('click', 'a.page-scroll', function (event) {
        event.preventDefault();

        var $anchor = $(this);
        var $navbar = $('nav');
        var href = $anchor.attr('href');
        var top = href && href.length > 1 ? $(href).offset().top : 0;
        if ($navbar.hasClass('affix-top')) {
            top -= $navbar.outerHeight();
        }
        $('html, body').stop().animate({
            scrollTop: top
        }, 600, 'easeInOutSine');

        location.hash = this.hash;

        return false;
    });

    $(document).on('click', '.navbar-collapse.in .navbar-nav a', function (event) {
        $(this).closest('.navbar-collapse.in').collapse('hide');
    });
});
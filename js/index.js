$(function () {
    $('a.page-scroll').on('click', function (event) {
        event.preventDefault();

        var $anchor = $(this);
        var $navbar = $anchor.closest('.navbar');
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
});
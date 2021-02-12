$(function () {

    $.ajaxSetup({cache: true});

    // Fix scrolling issue on Mobile Safari.
    if ($(window).width() < 768) {
        $(window).scrollTop(0);
    }
});

$(function () {
    $('.toggle-menu').click(function () {
        $('.exo-menu').toggleClass('display');

    });
    $('.navbar-toggle').click(function () {
        $('.collapse-nav').toggleClass('show');
        $(this).toggleClass('open');


    });

});
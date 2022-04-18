$(document).ready(function () {
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-close');
        $('.bd').toggleClass('bd-nav');
    })
});
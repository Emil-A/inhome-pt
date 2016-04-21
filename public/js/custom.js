$(document).on('scroll', function (e) {
    $('.navbar').css('background', 'rgba(0,0,0,'+($(document).scrollTop() / 50)+')');
});
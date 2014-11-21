;$(function(){

    var carousel1Options = {
        auto: true,
        visible: 2,
        speed: 300,
        pause: true,
        btnPrev: function() {
            return $(this).find('.prev');
        },
        btnNext: function() {
            return $(this).find('.next');
        }
    };

    var $slideshows = $('.slideshow');

    $slideshows.eq(0).jCarouselLite(carousel1Options);

}());

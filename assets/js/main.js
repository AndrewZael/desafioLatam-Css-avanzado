// Menu mobile
var count = 0;
$('.icon-menu-mob').click(function(e) {
    var icon = e.target;
    if (count === 0) {
        $(icon).attr('src', './assets/images/close.png');
        count = 1;
    } else {
        $(icon).attr('src', './assets/images/icon-menu-mobile.png');
        count = 0;
    }
    $('.menu-mobile').slideToggle();
});

// Smoth Scroll
$("a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('.menu .menu__link, .menu-mobile__link').removeClass('menu__link--active');
        $(this).addClass('menu__link--active');
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function() {
            window.location.hash = hash;
        });
    }
});
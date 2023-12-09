// AOS.init({ duration: 1500 });

document.querySelectorAll('a[href="#form"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(window).on('scroll', () => {
    if ($(this).scrollTop() >= 600) {
        $('#return-to-top').fadeIn(300);
    } else {
        $('#return-to-top').fadeOut(300);
    }
});

$('#return-to-top').on('click', () => {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});

$('.lenderSlider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 0,
    speed: 3000,
    autoplay: true,
    cssEase: 'linear',
    variableWidth: true,
});

$('.testimonialSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    vertical: true, // Enable vertical scrolling
    verticalSwiping: true,
});

$('#sertifiedServicesSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    centerMode: true,
    infinite: false,
    initialSlide: 1,
    draggable: false,
    focusOnSelect: true,
});
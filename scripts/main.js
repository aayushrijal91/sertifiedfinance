// AOS.init({ duration: 1500 });

document.querySelectorAll('a[href="#form"], a[href="#banner_form_wrapper"]').forEach(function (anchor) {
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

var loanCap = 2000000;
var termCap = 7;

$('input[type="radio"].loanType').on('click', function () {
    $(this).prop('checked', true);
    $('html, body').animate({
        scrollTop: $('#banner_form_wrapper').offset().top
    });
    $('#termSlider').val(0);
    $('#borrowSlider').val(5000);


    if ($(this).is(':checked')) {
        $('#banner-form-tab-1').hide();
        $('#banner-form-tab-2').fadeIn();

        switch ($(this).val()) {
            case 'Car Finance':
                loanCap = 250000;
                termCap = 7;
                break;
            case 'Marine Finance':
                loanCap = 1000000;
                termCap = 7;
                break;
            case 'Caravan Finance':
                loanCap = 250000;
                termCap = 7;
                break;
            case 'Motorbike Finance':
                loanCap = 100000;
                termCap = 7;
                break;
            case 'Truck & Trailer Finance':
                loanCap = 1000000;
                termCap = 7;
                break;
            case 'Equipment Finance':
                loanCap = 1000000;
                termCap = 7;
                break;
            case 'Personal Finance':
                loanCap = 150000;
                termCap = 7;
                break;
            case 'Business Finance':
                loanCap = 1000000;
                termCap = 7;
                break;
            case 'Other Finance':
                loanCap = 2000000;
                termCap = 30;
                break;
        }

        $('#borrowSlider').prop('max', loanCap);
        $('#termSlider').prop('max', termCap);
    }
});

$('#borrowSlider').on('input', function () {
    let value = $("#borrowSlider").val();
    let formattedVal = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $('#borrowAmount').html(formattedVal);
    const percentage = (value / loanCap) * 100;

    if (value == 5000) {
        $(this).parents('.range').find('.sliderThumb.amount').css('left', '0%');
        $(this).parents('.range').find('.progressBar.amount').css('width', '0%');
    } else {
        $(this).parents('.range').find('.sliderThumb.amount').css('left', `${percentage}%`);
        $(this).parents('.range').find('.progressBar.amount').css('width', `${percentage}%`);
    }
});

$('#termSlider').on('input', function () {
    let value = $("#termSlider").val();
    let formattedVal2 = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $('#borrowTerm').html(formattedVal2);

    $(this).parents('.range').find('.sliderThumb.year').css('left', (value * (95 / termCap)) + "%");
    $(this).parents('.range').find('.progressBar.year').css('width', (value * (100 / termCap)) + "%");
});

$('.show-form-tab-1').on('click', function () {
    $('.form-tab').hide();
    $('#banner-form-tab-1').fadeIn();
});

$('.show-form-tab-2').on('click', function () {
    $('.form-tab').hide();
    $('#form-tab-2').fadeIn();
});

$('.show-form-tab-3').on('click', function () {
    $('.form-tab').hide();
    $('#banner-form-tab-3').fadeIn();
});

$('.show-form-tab-4').on('click', function () {
    $('.form-tab').hide();
    $('#banner-form-tab-4').fadeIn();
});

$('.showPrevBannerTab').on('click', function (e) {
    e.preventDefault();

    let target = $(this).attr("data-target");

    $('.form-tab').hide();
    $(`#banner-form-tab-${target}`).fadeIn();
})

$('.lenderSlider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 0,
    speed: 2000,
    autoplay: true,
    cssEase: 'linear',
    variableWidth: true,
    draggable: false,
});

$('.testimonialSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
});

$(() => {
    $('#sertifiedServicesSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true,
        prevArrow: $("#servicePrev"),
        nextArrow: $("#serviceNext"),
        infinite: false,
        initialSlide: 0,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    initialSlide: 0,
                    centerPadding: "20px",
                }
            }
        ]
    });
});

$("#sertifiedProcesses").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '#sertifiedProcessSlider',
    responsive: [
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false,
                infinite: false,
                initialSlide: 0,
                centerPadding: "50px"
            }
        }
    ]
})

if ($(window).width() < 540) {
    $("#sertifiedProcessSlider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        infinite: false,
        initialSlide: 0,
        centerPadding: "50px",
        asNavFor: "#sertifiedProcesses"
    });

    $("#sertifiedPartnerSlider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        infinite: false,
        initialSlide: 0,
        centerPadding: "20px"
    });
}

let enquiryFormSlider = $('#enquiryFormSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    draggable: false,
    infinite: false,
    arrows: false,
    asNavFor: ".enquiryProgressSteps",
});

$(".enquiryProgressSteps").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '#enquiryFormSlider'
});

let currentTab = 0;

function showTab(tabIndex) {
    enquiryFormSlider.slick('slickGoTo', tabIndex);
    let tabs = document.getElementsByClassName('tab');

    if (tabIndex === 0) {
        $("#prevBtn").prop("disabled", true);
    } else if (tabIndex === tabs.length - 1) {
        $("#nextBtn .label").html("Submit");
    } else {
        $("#prevBtn").prop("disabled", false);
    }
}

function nextPrev(step) {
    let tabs = document.getElementsByClassName("tab");

    if (step === 1 && !validateForm()) {
        return false;
    }

    currentTab += step;

    if (currentTab >= tabs.length) {
        $('#enquiryForm').submit();

        return false;
    }

    showTab(currentTab);
}

function validateForm() {
    let currentTabElements = $(".tab:eq(" + currentTab + ")").find(".form-control.required");
    let isValid = true;

    currentTabElements.each(function () {
        const input = $(this);
        const errorMessage = input.next(".invalid-feedback");

        if (input.val() === "") {
            input.addClass("invalid");
            errorMessage.removeClass("text-opacity-0");
            isValid = false;
        } else {
            input.removeClass("invalid");
            errorMessage.addClass("text-opacity-0");

            // Check for valid phone number
            if (input.hasClass("phone-number")) {
                const phoneNumberRegex = /^\d{10}$/;
                if (!phoneNumberRegex.test(input.val())) {
                    input.addClass("invalid");
                    errorMessage.removeClass("text-opacity-0");
                    errorMessage.html('Pleas enter valid phone number. Eg: 0400000000')
                    isValid = false;
                    return; // Exit the loop if phone number is invalid
                }
            }

            // Check for valid email address
            if (input.hasClass("email")) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.val())) {
                    input.addClass("invalid");
                    errorMessage.removeClass("text-opacity-0");
                    errorMessage.html('Pleas enter valid email address')
                    isValid = false;
                    return; // Exit the loop if email is invalid
                }
            }
        }
    });

    return isValid;
}

showTab(currentTab);

function validatePhoneNumber(id, errorId) {
    let phoneInput = $(id).val();
    let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (!re.test(phoneInput)) {
        $(errorId).fadeIn();

        return false;
    } else {
        $(errorId).fadeOut();
    }

    return true;
}

$("#referralForm").on('submit', function (e) {
    e.preventDefault();

    let validation = validatePhoneNumber("#referralPhoneNumber", "#referralPhoneError");

    if (validation) this.submit();

    return validation;
});

$("#banner_form").on('submit', function (e) {
    e.preventDefault();

    $('#banner_form_submit').addClass('disabled').prop('disabled', true);

    let validation = validatePhoneNumber("#bannerPhoneNumber", "#bannerPhoneError");

    if (validation) this.submit();

    return validation;
});

$(() => {
    var dotsCount = 0;
    var maxDots = 3;
    var interval;

    function appendDot() {
        $('.loading_dots').append('.');
        dotsCount++;

        if (dotsCount === maxDots) {
            clearInterval(interval);
            setTimeout(function () {
                $('.loading_dots').empty();
                dotsCount = 0;
                startAnimation();
            }, 800);
        }
    }

    function startAnimation() {
        interval = setInterval(appendDot, 800);
    }

    startAnimation();
});
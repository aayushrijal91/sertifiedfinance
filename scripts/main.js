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

let loanCap = 2000000;
let termCap = 7;

$('#borrowSlider').on('input', function () {
    let value = $("#borrowSlider").val();
    let formattedVal = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $('#borrowAmount').html(formattedVal);

    $(this).parents('.range').find('.sliderThumb.amount').css('left', (value * (97 / loanCap)) + "%");
    $(this).parents('.range').find('.progressBar.amount').css('width', (value * (100 / loanCap)) + "%");
});

$('#termSlider').on('input', function () {
    let value = $("#termSlider").val();
    let formattedVal2 = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $('#borrowTerm').html(formattedVal2);

    $(this).parents('.range').find('.sliderThumb.year').css('left', (value * (95 / termCap)) + "%");
    $(this).parents('.range').find('.progressBar.year').css('width', (value * (100 / termCap)) + "%");
});

$('input[type="radio"].loanType').on('change', function () {
    if ($(this).is(':checked')) {
        $('#banner-form-tab-1').hide();
        $('#banner-form-tab-2').fadeIn();
    }
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
    initialSlide: 0,
    draggable: false,
    focusOnSelect: true,
});

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
        }
    });

    return isValid;
}

showTab(currentTab);
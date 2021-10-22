// create pager list items
var sliderImage4 = $('.slider__images-image4');

sliderImage4.each(function (index) {
    $('.js__slider__pagers4').append('<li>'+(index+1)+'</li>');
});

// set up vars
var sliderPagers4       = 'ol.js__slider__pagers4 li',
    sliderPagersActive4 = '.js__slider__pagers4 li.active',
    sliderImages4       = '.js__slider__images4',
    sliderImagesItem4   = '.slider__images-item4',
    sliderControlNext4  = '.slider__control--next4',
    sliderControlPrev4  = '.slider__control--prev4',
    sliderSpeed4        = 5000,
    lastElem4           = $(sliderPagers4).length-1,
    sliderTarget4;

// add css height to slider images list
function checkImageHeight4() {
    var sliderHeight = $('.slider__images-image4:visible').height(); 
    $(sliderImages4).css('height', sliderHeight+'px');
};

sliderImage4.on('load', function() {
    checkImageHeight4();
    $(sliderImages4).addClass('loaded')
});
$(window).resize(function(){
    checkImageHeight4();
});

// set up first slide
$(sliderPagers4).first().addClass('active');
$(sliderImagesItem4).hide().first().show();

// transition function
function sliderResponse4() {
    $(sliderImagesItem4).fadeOut(400).eq(sliderTarget4).fadeIn(400);
    $(sliderPagers4).removeClass('active').eq(sliderTarget4).addClass('active');
}

// pager controls
$(sliderPagers4).on('click', function() {
    if ( !$(this).hasClass('active') ) {
        sliderTarget4 = $(this).index();
        sliderResponse4();
        resetTiming4();
    }
});

// next/prev controls
$(sliderControlNext4).on('click', function() {
    sliderTarget4 = $(sliderPagersActive4).index();
    sliderTarget4 === lastElem4 ? sliderTarget4 = 0 : sliderTarget4 = sliderTarget4+1;
    sliderResponse4();
    resetTiming4();
});
$(sliderControlPrev4).on('click', function() {
    sliderTarget4 = $(sliderPagersActive4).index();
    lastElem4 = $(sliderPagers4).length-1;
    sliderTarget4 === 0 ? sliderTarget4 = lastElem4 : sliderTarget4 = sliderTarget4-1;
    sliderResponse4(sliderTarget4);
    resetTiming4();
});

// slider timing
function sliderTiming4() {
    sliderTarget4 = $(sliderPagersActive4).index();
    sliderTarget4 === lastElem4 ? sliderTarget4 = 0 : sliderTarget4 = sliderTarget4+1;
    sliderResponse4();
}

// slider autoplay
var timingRun4 = setInterval(function() {
    sliderTiming4();
}, sliderSpeed4);

function resetTiming4() {
    clearInterval(timingRun4);
    timingRun4 = setInterval(function() {
      sliderTiming4();
    }, sliderSpeed4);
}
$('.slider1').bxSlider({
    mode: 'fade',
    captions: true,
    auto: true,
    infiniteLoop: true,
    pause: 3000
  });

  $('.slider2').bxSlider({
    mode: 'fade',
    captions: true,
    maxSlides:3,
    minSlide: 1,
    slideWidth: 230,
    slideMargin: 10,
  });

  $('.slider3').bxSlider({
    mode: 'fade',
    captions: false,
    auto: true,
    minSlide: 1,
    pager: false,
    control: false,
  });
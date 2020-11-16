$(document).ready(function () {
  $(".hero__slider").slick({
    arrows: true,
    autoplay: true,
    dots: true,
    autoplaySpeed: 7000,
    appendArrows: ".arrows",
    appendDots: ".arrows",
    prevArrow:
      '<div id="prev" type="button" class="btn__hero-slider-l btn__hero-slider-l--disabled  btn-juliet"><img src="https://it-events.com/system/attachments/files/000/002/012/original/left_arrow.svg" alt="<" class="arrow__img"></div>',
    nextArrow:
      '<div id="next" type="button" class="btn__hero-slider-r btn__hero-slider-r--disabled btn-juliet"><img src="https://it-events.com/system/attachments/files/000/002/013/original/right_arrow.svg" alt=">" class="arrow__img"></div>',
    asNavFor: ".sliderBg",
  });
  $(".sliderBg").slick({
    arrows: false,
    asNavFor: ".hero__slider",
    fade: true,
  });
  $(".hero__inner").hover(function () {
    $(".btn__hero-slider-l").toggleClass("btn__hero-slider-l--disabled");
    $(".btn__hero-slider-r").toggleClass("btn__hero-slider-r--disabled");
  });

  $(".reviews__list").slick({
    dots: true,
    adaptiveHeight: true,
    prevArrow:
      '<div id="prev" type="button" class=" reviews__arrow reviews__arrow-l"><img src="https://it-events.com/system/attachments/files/000/002/012/original/left_arrow.svg" alt="<" class="arrow__img"></div>',
    nextArrow:
      '<div id="next" type="button" class=" reviews__arrow reviews__arrow-r"><img src="https://it-events.com/system/attachments/files/000/002/013/original/right_arrow.svg" alt=">" class="arrow__img"></div>',
  });
});

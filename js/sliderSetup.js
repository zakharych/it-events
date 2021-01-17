const slider = document.querySelector(".hero__slider");
const bgSlider = document.querySelector(".sliderBg");
const rewiewsSlider = document.querySelector(".reviews__list");
const lang = document.querySelector(".language");

(async () => {
  let DB = await (await fetch("./js/heroSlider.json")).json();

  DB.forEach((element) => {
    /// / создание элементов BG слайдера
    bgSliderItem = document.createElement("li");
    bgSliderItem.className = "sliderBg__item";
    bgSlider.append(bgSliderItem);
    // создание и добавления bg image
    bgSliderPic = document.createElement("img");
    bgSliderPic.className = "sliderBg__pic";
    bgSliderItem.append(bgSliderPic);
    bgSliderPic.src = element.bg;

    /// // создание элементов главного сладера

    // создание элемента слайдера
    sliderItem = document.createElement("li");
    sliderItem.className = "hero__item slick-slide";
    slider.append(sliderItem);

    // создание bg элемента
    heroBg = document.createElement("div");
    heroBg.className = "hero__bg";
    sliderItem.append(heroBg);

    heroBgPic = document.createElement("img");
    heroBgPic.className = "hero__bg-pic";
    heroBg.append(heroBgPic);
    heroBgPic.src = element.bg;

    // создание иконки события
    heroImg = document.createElement("div");
    heroImg.className = "hero__img";
    sliderItem.append(heroImg);

    if (element.imgProj !== "") {
      heroPic = document.createElement("img");
      heroPic.className = "hero__pic";
      heroImg.append(heroPic);
      heroPic.src = element.imgProj;
    }

    // создание описания слайда
    heroDesc = document.createElement("div"); // контейнер для контента
    heroDesc.className = "hero__desc";
    sliderItem.append(heroDesc);

    heroTitle = document.createElement("h1"); // заголовок события
    heroTitle.className = "hero__title";
    if (lang.innerText === "EN" || element.titleEng === undefined) {
      heroTitle.innerText = element.title;
    } else {
      heroTitle.innerText = element.titleEng;
    }
    heroDesc.append(heroTitle);

    heroSubTitle = document.createElement("span"); // Описание события
    heroSubTitle.className = "hero__subtitle";

    if (lang.innerText === "EN" || element.subtitleEng === undefined) {
      heroSubTitle.innerText = element.subtitle;
    } else {
      heroSubTitle.innerText = element.subtitleEng;
    }
    heroDesc.append(heroSubTitle);

    heroButton = document.createElement("a"); // Кнопка перехода
    heroButton.className = "hero__btn btn";

    if (lang.innerText === "EN" || element.btnTextEng === undefined) {
      heroButton.innerText = element.btnText;
    } else {
      heroButton.innerText = element.btnTextEng;
    }
    heroButton.href = element.link;
    heroDesc.append(heroButton);
  });
  runSlider();
})();
(async () => {
  let  DB = await (await fetch("./js/rewiewsSlider.json")).json();

  DB.forEach((element) => {
    /// / создание элементов  слайдера
    SliderItem = document.createElement("li");
    SliderItem.className = "reviews__item";
    rewiewsSlider.append(SliderItem);

    // создание обертки слайда
    slideWrapper = document.createElement("div");
    slideWrapper.className = "review";
    SliderItem.append(slideWrapper);

    // создание блока с лого конференции и датой
    slideConf = document.createElement("div");
    slideConf.className = "review__conf";
    slideWrapper.append(slideConf);

    сonfLogo = document.createElement("div"); // обертка картинки
    сonfLogo.className = "review__conf-logo";
    slideConf.append(сonfLogo);

    сonfImg = document.createElement("img"); // лого конфы
    сonfImg.className = "review__conf-img";
    сonfImg.src = element.confImg;
    сonfLogo.append(сonfImg);

    сonfDate = document.createElement("div"); // дата
    сonfDate.className = "review__date";
    сonfDate.innerText = element.date;
    slideConf.append(сonfDate);

    // создание блока с текстом  отзыва
    reviewText = document.createElement("div"); // текст отзыва
    reviewText.className = "review__text";
    if (lang.innerText === "EN" || element.reviewTextEng === undefined) {
      reviewText.innerHTML = `“${element.reviewText}”`;
    } else {
      reviewText.innerHTML = `“${element.reviewTextEng}”`;
    }
    slideWrapper.append(reviewText);

    // создание блока с автором
    reviewAuthor = document.createElement("div"); // обертка блока
    reviewAuthor.className = "review__author";
    slideWrapper.append(reviewAuthor);

    avatar = document.createElement("div"); // обертка автара
    avatar.className = "review__author-img";
    reviewAuthor.append(avatar);

    avatarImg = document.createElement("img"); // аватар автора
    avatarImg.className = "review__author-pic";
    avatarImg.alt = "фото";
    avatarImg.src = element.avatar;
    avatar.append(avatarImg);

    authorAbout = document.createElement("div"); // обертка об авторе
    authorAbout.className = "review__text-content";
    reviewAuthor.append(authorAbout);

    authorName = document.createElement("span"); // Имя автора
    authorName.className = "review__name";

    if (lang.innerText === "EN" || element.nameEng === undefined) {
      authorName.innerHTML = element.name;
    } else {
      authorName.innerHTML = element.nameEng;
    }
    authorAbout.append(authorName);

    authorCompany = document.createElement("span"); // Компания автора
    authorCompany.className = "review__company";

    if (lang.innerText === "EN" || element.companyEng === undefined) {
      authorCompany.innerHTML = element.company;
    } else {
      authorCompany.innerHTML = element.companyEng;
    }
    authorAbout.append(authorCompany);

    authorPosition = document.createElement("span"); // должность автора
    authorPosition.className = "review__position";
    authorPosition.innerHTML = element.position;

    if (lang.innerText === "EN" || element.positionEng === undefined) {
      authorPosition.innerHTML = element.position;
    } else {
      authorPosition.innerHTML = element.positionEng;
    }
    authorAbout.append(authorPosition);
  });
  runSliderRewiew();
})();

function runSlider() {
  $(document).ready(() => {
    $(".hero__slider").slick({
      arrows: true,
      autoplay: true,
      dots: true,
      autoplaySpeed: 7000, // скорость листания слайдов 7 сек
      appendArrows: ".arrows",
      appendDots: ".arrows",
      prevArrow:
        "<div id=\"prev\" class=\"btn__hero-slider-l btn__hero-slider-l--disabled  btn-juliet\"><img src=\"https://it-events.com/system/attachments/files/000/002/012/original/left_arrow.svg\" alt=\"<\" class=\"arrow__img\"></div>",
      nextArrow:
        "<div id=\"next\" class=\"btn__hero-slider-r btn__hero-slider-r--disabled btn-juliet\"><img src=\"https://it-events.com/system/attachments/files/000/002/013/original/right_arrow.svg\" alt=\">\" class=\"arrow__img\"></div>",
      asNavFor: ".sliderBg",
    });
    $(".sliderBg").slick({
      arrows: false,
      asNavFor: ".hero__slider",
      fade: true,
    });
    $(".hero__inner").hover(() => {
      $(".btn__hero-slider-l").toggleClass("btn__hero-slider-l--disabled");
      $(".btn__hero-slider-r").toggleClass("btn__hero-slider-r--disabled");
    });
  });
}
function runSliderRewiew() {
  $(document).ready(() => {
    $(".reviews__list").slick({
      dots: true,
      prevArrow:
        "<div id=\"prev\" class=\" reviews__arrow reviews__arrow-l\"><img src=\"https://it-events.com/system/attachments/files/000/002/026/original/left_arrow_grey.svg\" alt=\"<\" class=\"arrow__img\"></div>",
      nextArrow:
        "<div id=\"next\" class=\" reviews__arrow reviews__arrow-r\"><img src=\"https://it-events.com/system/attachments/files/000/002/027/original/right_arrow_grey.svg\" alt=\">\" class=\"arrow__img\"></div>",
    });
  });
}

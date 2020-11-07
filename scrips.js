const logo = document.querySelectorAll(".conf__logo"),
  background = document.querySelector(".conf-section"),
  itemElem = document.querySelectorAll(".conf__item-elem"),
  item = document.querySelectorAll(".conf__item"),
  btn = document.querySelectorAll(".conf__btn");
tempButtonText = "";
tempButtonBg = "";
tempButtoColor = "";
tempButtonWidth = 0;

btn.forEach((element) => {
  element.onmouseover = function () {
    tempButtonText = element.innerText;
    tempButtonBg = element.style.backgroundColor;
    tempButtoColor = element.style.color;
    tempButtonWidth = `${element.offsetWidth}px`;
    element.innerText = "Перейти";
    element.style.backgroundColor = "#00653a";
    element.style.color = "#ffffff";
    element.style.minWidth = tempButtonWidth;
  };
});

btn.forEach((element) => {
  element.onmouseout = function () {
    element.innerText = tempButtonText;
    element.style.backgroundColor = tempButtonBg;
    element.style.minWidth = "";
    element.style.color = tempButtoColor;
  };
});

itemElem.forEach((element) => {
  element.onmouseover = function (event) {
    let target = event.target;
    let togledClass = `conf__btn-${element.id}--active`;
    childs = element.childNodes;
    // tempButtonText = element.lastElementChild.innerText;

    element.style.opacity = 1;
    for (let i = 0; i < childs.length - 2; i++) {
      if (i % 2 !== 0) {
        childs[i].style.filter = "none";
      }
    }
    element.lastElementChild.classList.toggle(togledClass);
    // element.lastElementChild.innerText = "Перейти";

    if (element.id === "hr") {
      background.style.backgroundColor = "#f24944";
    } else if (element.id === "py") {
      background.style.backgroundColor = "#316696";
    } else if (element.id === "ost") {
      background.style.backgroundColor = "#36a9e1";
    } else if (element.id === "go") {
      background.style.backgroundColor = "#2d396b";
    }
  };
});

itemElem.forEach((element) => {
  element.onmouseout = function (event) {
    let target = event.target;
    childs = element.childNodes;
    for (let i = 0; i < childs.length - 2; i++) {
      if (i % 2 !== 0) {
        // console.log(childs[i].classList);
        childs[i].style.filter = "grayscale(100%)";
      }
    }
    background.style.backgroundColor = "#2f2f2f";
    element.style.opacity = 0.5;
    // element.lastElementChild.innerText = tempButtonText;
    // element.style.filter = "grayscale(100%)";
    let togledClass = `conf__btn-${element.id}--active`;
    element.lastElementChild.classList.toggle(togledClass);
  };
});

////slider

const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemsList = document.querySelector("#items");

const loop = (direction, e) => {
  e.preventDefault();

  if (direction === "right") {
    for (let i = 0; i < 5; i++) {
      itemsList.appendChild(itemsList.firstElementChild);
    }
  } else {
    for (let i = 0; i < 5; i++) {
      itemsList.insertBefore(
        itemsList.lastElementChild,
        items.firstElementChild
      );
    }
  }
};

right.addEventListener("click", (e) => {
  loop("right", e);
});

left.addEventListener("click", (e) => {
  loop("left", e);
});

///////////////////////              hero slider            /////////////////////

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const slider = document.querySelector("#hero__slider");

const slide = (direction) => {
  next.classList.toggle("hero__slider--active");
  prev.classList.toggle("hero__slider--active");
  if (direction === "right") {
    slider.appendChild(slider.firstElementChild);
  } else {
    slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
  }
};

function nextSlide() {
  slide("right");
  setTimeout(function () {
    nextSlide();
  }, 5000);
}

nextSlide();
prev.addEventListener("click", (e) => {
  e.preventDefault();
  slide("right");
});

next.addEventListener("click", (e) => {
  e.preventDefault();
  slide("left");
});

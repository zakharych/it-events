///////    conf section     ////////

const logo = document.querySelectorAll(".conf__logo"),
  background = document.querySelector(".conf-section"),
  itemElem = document.querySelectorAll(".conf__item-elem"),
  item = document.querySelectorAll(".conf__item"),
  btn = document.querySelectorAll(".conf__btn"),
  confName = document.querySelectorAll(".conf__name"),
  confDate = document.querySelectorAll(".conf__date"),
  lineL = document.querySelectorAll(".conf__item-line-l"),
  lineR = document.querySelectorAll(".conf__item-line-r"),
  hiddenpic = document.querySelector(".hiddenpicOst"),
  ostUnActive = logo[2].innerHTML,
  ostActive = hiddenpic.innerHTML;
  
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

    // element.style.filter = "none";
    element.children[2].style.opacity = 1;
    element.children[3].style.opacity = 1;
    for (let i = 0; i < childs.length - 2; i++) {
      if (i % 2 !== 0) {
        childs[i].style.filter = "none";
      }
    }
    element.lastElementChild.classList.add(togledClass);

    lineL.forEach((element) => {
      element.style.opacity = 0.5;
    });
    lineR.forEach((element) => {
      element.style.opacity = 0.5;
    });

    if (element.id === "hr") {
      background.style.backgroundColor = "#f24944";
      for (let i = 0; i < confName.length; i++) {
        if (i !== 0) {
          confName[i].style.opacity = 0.5;
          confDate[i].style.opacity = 0.5;
        }
      }
    } else if (element.id === "py") {
      background.style.backgroundColor = "#316696";
      for (let i = 0; i < confName.length; i++) {
        if (i !== 1) {
          confName[i].style.opacity = 0.5;
          confDate[i].style.opacity = 0.5;
        }
      }
    } else if (element.id === "ost") {
      if (logo[2].innerHTML === ostUnActive) {
        logo[2].innerHTML = ostActive;
      }
      background.style.backgroundColor = "#36a9e1";
      for (let i = 0; i < confName.length; i++) {
        if (i !== 2) {
          confName[i].style.opacity = 0.5;
          confDate[i].style.opacity = 0.5;
        }
      }
    } else if (element.id === "go") {
      background.style.backgroundColor = "#2d396b";
      for (let i = 0; i < confName.length; i++) {
        if (i !== 3) {
          confName[i].style.opacity = 0.5;
          confDate[i].style.opacity = 0.5;
        }
      }
    }
  };
});

itemElem.forEach((element) => {
  element.onmouseout = function (event) {
    let target = event.target;
    childs = element.childNodes;
    for (let i = 0; i < childs.length - 2; i++) {
      if (i % 2 !== 0) {
        childs[i].style.filter = "grayscale(100%)";
      }
    }
    background.style.backgroundColor = "#2f2f2f";
    element.children[2].style.opacity = 0.5;
    element.children[3].style.opacity = 0.5;
    let togledClass = `conf__btn-${element.id}--active`;
    element.lastElementChild.classList.toggle(togledClass);

    if (logo[2].innerHTML === ostActive) {
      logo[2].innerHTML = ostUnActive;
    }

    lineL.forEach((element) => {
      element.style.opacity = 1;
    });
    lineR.forEach((element) => {
      element.style.opacity = 1;
    });

    confName.forEach((element) => {
      element.style.opacity = 1;
    });
    confDate.forEach((element) => {
      element.style.opacity = 1;
    });
  };
});

////slider Partners

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

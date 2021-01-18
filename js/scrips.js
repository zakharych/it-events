///////    conf section     ////////
const logo = document.querySelectorAll(".conf__logo");
const background = document.querySelector(".conf-section");
const section = document.querySelector(".conf-section");
const itemElem = document.querySelectorAll(".conf__item-elem");
const item = document.querySelectorAll(".conf__item");
const btn = document.querySelectorAll(".conf__btn");
const confName = document.querySelectorAll(".conf__name");
const confDate = document.querySelectorAll(".conf__date");
const lineL = document.querySelectorAll(".conf__item-line-l");
const lineR = document.querySelectorAll(".conf__item-line-r");
const hiddenpic = document.querySelector(".hiddenpicOst");
const date = Date.now();
const ostUnActive = logo[2].innerHTML;
const ostActive = hiddenpic.innerHTML;

tempButtonText = "";
tempButtonBg = "";
tempButtoColor = "";
tempButtonWidth = 0;

section.onmouseover = function(event) {
  console.log(this);
  console.log(event.target);
};

btn.forEach((element) => {
  element.onmouseover = function () {
    tempButtonText = element.innerText;
    tempButtonBg = element.style.backgroundColor;
    tempButtoColor = element.style.color;
    tempButtonWidth = `${element.offsetWidth}px`;

    if (lang.innerText === "EN") {
      element.innerText = "Перейти";
    } else {
      element.innerText = "Learn more";
    }

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
  let atrData = Date.parse(
    element.lastElementChild.getAttribute("data-EndDate")
  );
  let activeClass = `conf__btn-${element.id}--active`;

  if (atrData >= date) {
    element.lastElementChild.classList.add(activeClass);
  }

  element.onmouseover = function (event) {
    // console.log(this.children);
    let target = event.target;
    let togledClass = `conf__btn-${element.id}--active`;

    section.classList.add(`conf-section--${element.id}`);
    element.children[2].classList.add('conf__logo--hover');
    element.children[3].classList.add('conf__btn--hover');

    if (!element.lastElementChild.classList.contains(togledClass)) {
      element.lastElementChild.classList.add(togledClass);
    }

    lineL.forEach((element) => {
      element.classList.add('conf__item-line-l--transparent');
    });
    lineR.forEach((element) => {
      element.classList.add('conf__item-line-r--transparent');
    });

    if (element.id === "hr") {
      for (let i = 0; i < confName.length; i++) {
        if (i !== 0) {
          confName[i].classList.add("conf__name--transparent");
          confDate[i].classList.add("conf__date--transparent");
        }
      }
    } else if (element.id === "py") {
      for (let i = 0; i < confName.length; i++) {
        if (i !== 1) {
          confName[i].classList.add("conf__name--transparent");
          confDate[i].classList.add("conf__date--transparent");
        }
      }
    } else if (element.id === "ost") {
      if (logo[2].innerHTML === ostUnActive) {
        logo[2].innerHTML = ostActive;
      }
      for (let i = 0; i < confName.length; i++) {
        if (i !== 2) {
          confName[i].classList.add("conf__name--transparent");
          confDate[i].classList.add("conf__date--transparent");
        }
      }
    } else if (element.id === "go") {
      for (let i = 0; i < confName.length; i++) {
        if (i !== 3) {
          confName[i].classList.add("conf__name--transparent");
          confDate[i].classList.add("conf__date--transparent");
        }
      }
    }
  };
});

itemElem.forEach((element) => {
  let atrData = Date.parse(
    element.lastElementChild.getAttribute("data-EndDate")
  );
  element.onmouseout = function (event) {
    let target = event.target;
    section.className = "conf-section";    
    element.children[2].classList.remove('conf__logo--hover');
    element.children[3].classList.remove('conf__btn--hover');
    
    let togledClass = `conf__btn-${element.id}--active`;

    if (
      element.lastElementChild.classList.contains(togledClass) &&
      atrData < date
    ) {
      element.lastElementChild.classList.remove(togledClass);
    }

    if (logo[2].innerHTML === ostActive) {
      logo[2].innerHTML = ostUnActive;
    }

    lineL.forEach((element) => {
      element.classList.remove('conf__item-line-l--transparent');
    });
    lineR.forEach((element) => {
      element.classList.remove('conf__item-line-r--transparent');
    });

    confName.forEach((element) => {
      element.className = "conf__name";
    });
    confDate.forEach((element) => {
      element.className = "conf__date";
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

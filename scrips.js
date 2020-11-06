const logo = document.querySelectorAll(".conf__logo"),
  background = document.querySelector(".conf-section"),
  item = document.querySelectorAll(".conf__item");

item.forEach((element) => {
  element.onmouseover = function (event) {
    let target = event.target;
    console.log(target);

    
    //   target.style.opacity = "1";
    //   if (element.lastElementChild === logo[0].lastElementChild) {
    //     background.style.backgroundColor = "#f24944";
    //     element.style.opacity = "1";
    //     logo.forEach((element) => {
    //       if (element.lastElementChild !== logo[0].lastElementChild) {
    //         element.style.opacity = "0.5";
    //       }
    //     });
    //   } else if (element.lastElementChild === logo[1].lastElementChild) {
    //     background.style.backgroundColor = "#316696";
    //     logo.forEach((element) => {
    //       element.style.opacity = "1";
    //       if (element.lastElementChild !== logo[1].lastElementChild) {
    //         element.style.opacity = "0.5";
    //       }
    //     });
    //   } else if (element.lastElementChild === logo[2].lastElementChild) {
    //     background.style.backgroundColor = "#36a9e1";
    //     element.style.opacity = "1";
    //     logo.forEach((element) => {
    //       if (element.lastElementChild !== logo[2].lastElementChild) {
    //         element.style.opacity = "0.5";
    //       }
    //     });
    //   } else if (element.lastElementChild === logo[3].lastElementChild) {
    //     background.style.backgroundColor = "#2d396b";
    //     element.style.opacity = "1";
    //     logo.forEach((element) => {
    //       if (element.lastElementChild !== logo[3].lastElementChild) {
    //         element.style.opacity = "0.5";
    //       }
    //     });
    //   }
  };
});

logo.forEach((element) => {
  element.onmouseout = function (event) {
    let target = event.target;
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

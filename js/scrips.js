///////    conf section     ////////
// const item = document.querySelectorAll(".conf__item");
// const background = document.querySelector(".conf-section");
// const btn = document.querySelectorAll(".conf__btn");

const logo = document.querySelectorAll('.conf__logo');
const section = document.querySelector('.conf-section');
const itemElem = document.querySelectorAll('.conf__item-elem');
const confName = document.querySelectorAll('.conf__name');
const confDate = document.querySelectorAll('.conf__date');
const lineL = document.querySelectorAll('.conf__item-line-l');
const lineR = document.querySelectorAll('.conf__item-line-r');
const hiddenpic = document.querySelector('.hiddenpicOst');

const date = Date.now();
const ostUnActive = logo[2].innerHTML;
const ostActive = hiddenpic.innerHTML;

let tempButtonText = '';
let tempButtonBg = '';
let tempButtoColor = '';
let tempButtonWidth = 0;

function transparentLines(position) {
  for (let i = 0; i < confName.length; i++) {
    if (i !== position) {
      confName[i].classList.add('conf__name--transparent');
      confDate[i].classList.add('conf__date--transparent');
    }
  }
}

function changeHoverBtnText(btnBlock) {
  tempButtonText = btnBlock.innerText;
  tempButtonWidth = `${btnBlock.offsetWidth}px`;

  if (lang.innerText === 'EN') {
    btnBlock.innerText = 'Перейти';
  } else {
    btnBlock.innerText = 'Learn more';
  }
  btnBlock.style.minWidth = tempButtonWidth;
}

function returnBtnText(btnBlock) {
  btnBlock.innerText = tempButtonText;
  btnBlock.style.minWidth = '';
}

section.onmouseover = function (event) {
  // console.log(event.target);
  const conf = event.target.closest('.conf__item-elem');
  if (event.target.id === 'confBtn') {
    changeHoverBtnText(event.target);
  } else if (event.target.classList.contains('conf__item-elem') || event.target.closest('.conf__item-elem')) {
    console.log('блок');
    
  } else {
    console.log('НЕ БЛОК');
  }
};

section.onmouseout = function (event) {
  if (event.target.id === 'confBtn') {
    returnBtnText(event.target);
  }
};

itemElem.forEach((element) => {
  let atrData = Date.parse(element.lastElementChild.getAttribute('data-EndDate'));
  let activeClass = `conf__btn-${element.id}--active`;

  if (atrData >= date) {
    element.lastElementChild.classList.add(activeClass);
  }

  element.onmouseover = function (event) {
    let togledClass = `conf__btn-${element.id}--active`;

    section.classList.add(`conf-section--${element.id}`);
    element.children[2].classList.add('conf__logo--hover');
    element.children[3].classList.add('conf__btn--hover-block');

    if (!element.lastElementChild.classList.contains(togledClass)) {
      element.lastElementChild.classList.add(togledClass);
    }

    lineL.forEach((element) => {
      element.classList.add('conf__item-line-l--transparent');
    });
    lineR.forEach((element) => {
      element.classList.add('conf__item-line-r--transparent');
    });

    if (element.id === 'hr') {
      transparentLines(0);
    } else if (element.id === 'py') {
      transparentLines(1);
    } else if (element.id === 'ost') {
      if (logo[2].innerHTML === ostUnActive) {
        logo[2].innerHTML = ostActive;
      }
      transparentLines(2);
    } else if (element.id === 'go') {
      transparentLines(3);
    }
  };
});

itemElem.forEach((element) => {
  let atrData = Date.parse(element.lastElementChild.getAttribute('data-EndDate'));
  element.onmouseout = function (event) {
    let target = event.target;
    section.className = 'conf-section';
    element.children[2].classList.remove('conf__logo--hover');
    element.children[3].classList.remove('conf__btn--hover-block');

    let togledClass = `conf__btn-${element.id}--active`;

    if (atrData < date) {
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
      element.className = 'conf__name';
    });
    confDate.forEach((element) => {
      element.className = 'conf__date';
    });
  };
});

////slider Partners

const left = document.querySelector('#left');
const right = document.querySelector('#right');
const itemsList = document.querySelector('#items');

const loop = (direction, e) => {
  e.preventDefault();

  if (direction === 'right') {
    for (let i = 0; i < 5; i++) {
      itemsList.appendChild(itemsList.firstElementChild);
    }
  } else {
    for (let i = 0; i < 5; i++) {
      itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild);
    }
  }
};

right.addEventListener('click', (e) => {
  loop('right', e);
});

left.addEventListener('click', (e) => {
  loop('left', e);
});

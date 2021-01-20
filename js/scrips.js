///////    conf section     ////////
// const item = document.querySelectorAll(".conf__item");
// const background = document.querySelector(".conf-section");
// const btn = document.querySelectorAll(".conf__btn");

// const confList = document.querySelector('.conf__list');
// const confBlocks2 = Array.from(confList.children);
const confBlocks = document.querySelectorAll('.conf__item');

const logo = document.querySelectorAll('.conf__img');
const section = document.querySelector('.conf-section');
const itemElem = document.querySelectorAll('.conf__item-elem');
const confName = document.querySelectorAll('.conf__name');
const confDate = document.querySelectorAll('.conf__date');
const lineL = document.querySelectorAll('.conf__item-line-l');
const lineR = document.querySelectorAll('.conf__item-line-r');

const todayDate = Date.now();

let tempButtonText = '';
let tempButtonBg = '';
let tempButtoColor = '';
let tempButtonWidth = 0;

itemElem.forEach((element) => {
  const confDate = Date.parse(element.lastElementChild.getAttribute('data-EndDate'));
  const activeClass = `conf__btn-${element.id}--active`;

  if (confDate >= todayDate) {
    element.lastElementChild.classList.add(activeClass);
  }
});

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
function confBlockManipulation(confBlock) {
  const activeClass = `conf__btn-${confBlock.id}--active`;
  section.classList.add(`conf-section--${confBlock.id}`);
  confBlock.children[2].classList.add('conf__logo--hover');
  confBlock.children[3].classList.add('conf__btn--hover-block');

  if (!confBlock.lastElementChild.classList.contains(activeClass)) {
    confBlock.lastElementChild.classList.add(activeClass);
  }
  if (confBlock.id === 'hr') {
    transparentLines(0);
  } else if (confBlock.id === 'py') {
    transparentLines(1);
  } else if (confBlock.id === 'ost') {
    logo[2].classList.remove('conf__img--filter');
    transparentLines(2);
  } else if (confBlock.id === 'go') {
    transparentLines(3);
  }

  lineL.forEach((element) => {
    element.classList.add('conf__item-line-l--transparent');
  });
  lineR.forEach((element) => {
    element.classList.add('conf__item-line-r--transparent');
  });
}

section.onmouseover = function (event) {
  const confBlock = event.target.closest('.conf__item-elem');
  // const confBlockClass = event.target.closest('.conf__item');
  const conf = event.target.closest('.conf__item-elem');
  if (
    event.target.classList.contains('.conf__item-elem') ||
    event.target.closest('.conf__item-elem')
  ) {
    confBlockManipulation(confBlock);
    // hoverBlock = new ConfElem(confBlockClass);
    // hoverBlock.hoverElem();
    if (event.target.id === 'confBtn') {
      changeHoverBtnText(event.target);
    }
  } else {
  }
};

section.onmouseout = function (event) {
  if (!event.fromElement.classList.contains('.conf__item')) {
    confBlocks.forEach((element) => {
      resetConfBlock(element);
    });
  }
  if (event.target.id === 'confBtn') {
    returnBtnText(event.target);
  }
};

function resetConfBlock(confFullBlock) {
  const confBlock = confFullBlock.children[2];
  const lineL = confFullBlock.children[0];
  const lineR = confFullBlock.children[1];
  const confName = confBlock.querySelector('.conf__name');
  const confDateTitle = confBlock.querySelector('.conf__date');
  const confDate = Date.parse(confBlock.lastElementChild.getAttribute('data-EndDate'));
  const activeClass = `conf__btn-${confBlock.id}--active`;

  section.className = 'conf-section';

  if (todayDate > confDate) {
    confBlock.lastElementChild.classList.remove(activeClass);
  }

  confBlock.children[2].classList.remove('conf__logo--hover');
  confBlock.children[3].classList.remove('conf__btn--hover-block');

  logo[2].classList.add('conf__img--filter');

  lineL.classList.remove('conf__item-line-l--transparent');
  lineR.classList.remove('conf__item-line-r--transparent');

  confName.className = 'conf__name';
  confDateTitle.className = 'conf__date';
}

// class ConfElem {
//   constructor(curentBlock) {
//     this.curentBlock = curentBlock;
//   }

//   hoverElem() {
//     for (let i = 0; i < confBlocks.length; i++) {
//       // console.log(confBlocks[i].id);
//       // console.log(this.curentBlock.id);
//       if (this.curentBlock.id === confBlocks[i].id) {
//         // console.log(i.id);
//       }
//     }
//   }
// }

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

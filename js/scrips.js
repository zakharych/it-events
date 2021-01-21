///////    conf confList     ////////

const confBlocks = document.querySelectorAll('.conf__item');
const logo = document.querySelectorAll('.conf__img');
const confList = document.querySelector('.conf__list');
const itemElems = document.querySelectorAll('.conf__item');
const itemElem = document.querySelectorAll('.conf__item-elem');
const confName = document.querySelectorAll('.conf__name');
const confDate = document.querySelectorAll('.conf__date');

const lines = document.querySelectorAll('.conf__item-line');

const todayDate = Date.now();

let tempButtonText = '';
let tempButtonBg = '';
let tempButtoColor = '';
let tempButtonWidth = 0;

let currentElem = null;

itemElem.forEach((element) => {
  const confDate = Date.parse(element.lastElementChild.getAttribute('data-EndDate'));
  const activeClass = `conf__btn-${element.id}--active`;

  if (confDate >= todayDate) {
    element.lastElementChild.classList.add(activeClass);
  }
});

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

confList.onmouseover = function (event) {
  if (currentElem) return;
  console.log(event.target);
  if (event.target.id === 'confBtn') {
    changeHoverBtnText(event.target);
  }
  let target = event.target.closest('.conf__item');

  if (!target) return;
  if (!confList.contains(target)) return;

  currentElem = target;
  const hoverBlock = new ConfElem(target);
  hoverBlock.hoverElem();
};

confList.onmouseout = function (event) {
  if (!currentElem) return;
  console.log(event.relatedTarget);
  if (event.relatedTarget.id === 'confBtn') {
    changeHoverBtnText(event.relatedTarget);
  }
  if (event.target.id === 'confBtn') {
    returnBtnText(event.target);
  }
  let relatedTarget = event.relatedTarget;

  while (relatedTarget) {
    if (relatedTarget == currentElem) return;

    relatedTarget = relatedTarget.parentNode;
  }

  const hoverBlock = new ConfElem(currentElem);
  hoverBlock.unhoverElem();
};

class ConfElem {
  constructor(curentBlock) {
    this.curentBlock = curentBlock;
    this.activeBtnClass = `conf__btn-${curentBlock.id}--active`;
    this.btn = this.curentBlock.querySelector('.conf__btn');
    this.logo = this.curentBlock.querySelector('.conf__logo');
    this.confDate = Date.parse(this.btn.getAttribute('data-EndDate'));
  }

  hoverElem() {
    for (let i = 0; i < confBlocks.length; i++) {
      let headcontTitle = [
        confBlocks[i].querySelector('.conf__name'),
        confBlocks[i].querySelector('.conf__date'),
      ];
      this.transparentElemnt(lines);
      if (this.curentBlock.id === confBlocks[i].id) {
        this.curentBlock.closest('section').classList.add(`conf-section--${this.curentBlock.id}`);

        if (!this.btn.classList.contains(this.activeBtnClass)) {
          this.btn.classList.add(this.activeBtnClass);
        }
        this.hoverBlockElem(this.btn, this.logo);
        this.logo.classList.remove('conf__logo--filter');
      } else {
        this.transparentElemnt(headcontTitle);
      }
    }
  }

  unhoverElem() {
    this.curentBlock.closest('section').classList.remove(`conf-section--${this.curentBlock.id}`);
    this.untransparentElemnt(lines);
    this.hoverBlockElem(this.btn, this.logo);
    if (this.curentBlock.id === "ost2") {
      this.logo.classList.add('conf__logo--filter');
      
    }
    if (todayDate > this.confDate) {
      this.btn.classList.remove(this.activeBtnClass);
    }
    itemElems.forEach((element) => {
      if (this.curentBlock.id !== element.id) {
        let headcontTitle = [
          element.querySelector('.conf__name'),
          element.querySelector('.conf__date'),
        ];

        this.untransparentElemnt(headcontTitle);
      }
    });
    currentElem = null;
  }

  transparentElemnt(element) {
    element.forEach((element) => {
      element.classList.add('conf--transparent-elem');
    });
  }

  hoverBlockElem(...element) {
    element.forEach((element) => {
      element.classList.toggle('conf--hover-block-elem');
    });
  }

  untransparentElemnt(element) {
    element.forEach((element) => {
      element.classList.remove('conf--transparent-elem');
    });
  }
}

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

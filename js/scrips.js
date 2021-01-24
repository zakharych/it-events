//////*/    conf confList     ////////

const confBlocks = document.querySelectorAll('.conf__item');
const confList = document.querySelector('.conf__list');
const itemElems = document.querySelectorAll('.conf__item');
const lines = document.querySelectorAll('.conf__item-line');
const filterConfId = 'ost'
const todayDate = Date.now();

const texBtnRu = 'Перейти';
const texBtnEng = 'Learn more';
let tempButtonText = '';
let tempButtonBg = '';
let tempButtoColor = '';
let tempButtonWidth = 0;

let currentElem = null;

class ConfElem {
  constructor(curentBlock) {
    this.curentBlock = curentBlock;
    this.revBtnClass = `conf__btn--prev`;
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

        // if (!this.btn.classList.contains(this.activeBtnClass)) {
          this.btn.classList.add(this.activeBtnClass);
        // }
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
    if (this.curentBlock.id === filterConfId) {
      this.logo.classList.add('conf__logo--filter');
    }
    // if (todayDate > this.confDate) {
      this.btn.classList.remove(this.activeBtnClass);
    // }
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

  hilightBtn() {
    if (this.confDate >= todayDate) {
      this.btn.classList.add(this.revBtnClass);
    }
  }

  changeBtnText(bool) {
    if (bool) {
      tempButtonText = this.btn.innerText;
      tempButtonWidth = `${this.btn.offsetWidth}px`;

      if (lang.innerText === 'EN') {
        this.btn.innerText = texBtnRu;
      } else {
        this.btn.innerText = texBtnEng;
      }
      this.btn.style.minWidth = tempButtonWidth;
    } else {
      this.btn.innerText = tempButtonText;
      this.btn.style.minWidth = '';
    }
  } 
}

itemElems.forEach((element) => {
  const hilightBtn = new ConfElem(element);
  hilightBtn.hilightBtn();
});

confList.onmouseover = function (event) {
  if (currentElem) return;
  if (event.target.classList.contains('conf__btn')) {
    const nearsetBlock = event.target.closest('.conf__item')
    const hoverBlock = new ConfElem(nearsetBlock);
    hoverBlock.changeBtnText("change");
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
  if (event.relatedTarget.classList.contains('conf__btn')) {
    const nearsetBlock = event.target.closest('.conf__item')
    const hoverBlock = new ConfElem(nearsetBlock);
    hoverBlock.changeBtnText("change");
  }
  if (event.target.classList.contains('conf__btn')) {
    const nearsetBlock = event.target.closest('.conf__item')
    const hoverBlock = new ConfElem(nearsetBlock);
    hoverBlock.changeBtnText();
  }
  let relatedTarget = event.relatedTarget;

  while (relatedTarget) {
    if (relatedTarget == currentElem) return;
    relatedTarget = relatedTarget.parentNode;
  }

  const hoverBlock = new ConfElem(currentElem);
  hoverBlock.unhoverElem();
};

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

///////    conf section     ////////

const confBlocks = document.querySelectorAll('.conf__item');
const logo = document.querySelectorAll('.conf__img');
const section = document.querySelector('.conf-section');
const itemElem = document.querySelectorAll('.conf__item-elem');
const confName = document.querySelectorAll('.conf__name');
const confDate = document.querySelectorAll('.conf__date');

const lines = document.querySelectorAll('.conf__item-line');

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
  const confBlockClass = event.target.closest('.conf__item');
  if (
    event.target.classList.contains('.conf__item-elem') ||
    event.target.closest('.conf__item-elem')
  ) {
    const hoverBlock = new ConfElem(confBlockClass);
    hoverBlock.hoverElem();
    if (event.target.id === 'confBtn') {
      changeHoverBtnText(event.target);
    }
  }
};

section.onmouseout = function (event) {
  if (!event.fromElement.classList.contains('.conf__item')) {
    const confBlockClass = event.fromElement.closest('.conf__item') || event.toElement;

    if (confBlockClass === null) {
      console.log(event);
      console.log(confBlockClass);
    }

    // const unhoverBlock = new ResroreConfElem();
    // unhoverBlock.hoverElem();

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
  // const lineL = confFullBlock.children[0];
  // const lineR = confFullBlock.children[1];
  const confName = confBlock.querySelector('.conf__name');
  const confDateTitle = confBlock.querySelector('.conf__date');
  const confDate = Date.parse(confBlock.lastElementChild.getAttribute('data-EndDate'));
  const activeClass = `conf__btn-${confBlock.id}--active`;

  section.className = 'conf-section';

  if (todayDate > confDate) {
    confBlock.lastElementChild.classList.remove(activeClass);
  }

  confBlock.children[2].classList.remove('conf--hover-block-elem');
  confBlock.children[3].classList.remove('conf--hover-block-elem');

  // logo[2].classList.add('conf__logo--filter');

  // lineL.classList.remove('conf--transparent-elem');
  // lineR.classList.remove('conf--transparent-elem');

  confName.className = 'conf__name';
  confDateTitle.className = 'conf__date';
}

class ConfElem {
  constructor(curentBlock) {
    this.curentBlock = curentBlock;
    this.activeBtnClass = `conf__btn-${curentBlock.id}--active` || null;
    this.btn = this.curentBlock.querySelector('.conf__btn');
    this.logo = this.curentBlock.querySelector('.conf__logo');
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

  unHoverElem() {
    this.untransparentElemnt(lines);
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

class ResroreConfElem extends ConfElem {

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

const numberBlocks = document.querySelectorAll('.about__text');
const lastAboutItem = document.querySelector('.about__subtitle').lastElementChild;

let block_show = false;

function scrollTracking() {
  if (block_show) {
    return false;
  }
  const wt = $(window).scrollTop();
  const wh = $(window).height();
  const et = $(lastAboutItem).offset().top;
  const eh = $(lastAboutItem).outerHeight();
  const dh = $(document).height();

  if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
    block_show = true;

    numberBlocks.forEach((element) => {
      const endCount = element.innerText;
    
      let curindex = 0;
      let dillay = 100;
      
      let timerId = setTimeout(function request() {
        element.innerText = curindex;
        curindex += 1;
        dillay *= 0.96;
        if (curindex <= endCount) {
          timerId = setTimeout(request, dillay, curindex);
        }
      }, dillay);
    });
  }
}

$(window).scroll(() => {
  scrollTracking();
});

$(document).ready(() => {
  scrollTracking();
});

// const contBlock = document.querySelector(".about__text");

let block_show = false;

function scrollTracking() {
  if (block_show) {
    return false;
  }

  const wt = $(window).scrollTop();
  const wh = $(window).height();
  const et = $(".about__content").offset().top;
  const eh = $(".about__content").outerHeight();
  const dh = $(document).height();

  if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
    block_show = true;

    setInterval(() => {
      $(".about__text").css({
        backgroundColor: "#000",
        color: "#fff",
        padding: "5px",
      });
    }, 1000);
    console.log($(".about__text").text());
    nums = $(".about__text");
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
      num = Number(nums[i].innerText);
      console.log(num);

      let j = 0;
      while (j < num) {
        j++;
        setInterval(() => {
          nums[i].innerText = j;
          console.log(nums[i].innerText);
        }, 1000);
      }
    }

    function scroll(val, el, timeout, step) {
      let i = 0;
      (function () {
        if (i <= val) {
          setTimeout(arguments.callee, timeout);
          document.getElementById(el).innerHTML = i;
          i += step;
        } else {
          document.getElementById(el).innerHTML = val;
        }
      }());
    }

    scroll(60203, "shethik-cifra", 10, 60);

    console.log("я все вижу");
  }
}

$(window).scroll(() => {
  scrollTracking();
});

$(document).ready(() => {
  scrollTracking();
});

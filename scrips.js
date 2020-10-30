const logo = document.querySelectorAll(".conf__logo"),
  background = document.querySelector(".conf");
// console.log(logo[0]);

// logo.addEventListener("mouseover", () => {
//   if (condition) {
//   }
//   background.style.backgroundColor = "#f24944";
// });

// function mouselog(event) {

//     console.log(event.target);
//   text.value += `${
//     event.type
//   } [target: ${event.target.id}]\n`.replace(/(:|^)(\d\D)/, "$10$2");
//   text.scrollTop = text.scrollHeight;
// }


logo.forEach(element => {
    element.onmouseover = function (event) {
        let target = event.target;
        // console.log(element.lastElementChild);
        // console.log(logo[0].lastElementChild);
        // console.log(target);
        target.style.opacity = "1";

        if (element.lastElementChild === logo[0].lastElementChild) {
            background.style.backgroundColor = "#f24944";
        }
        else if (element.lastElementChild === logo[1].lastElementChild) {
            background.style.backgroundColor = "#316696";
        }
        else if (element.lastElementChild === logo[2].lastElementChild) {
            background.style.backgroundColor = "#36a9e1";
        }
        else if (element.lastElementChild === logo[3].lastElementChild) {
            background.style.backgroundColor = "#2d396b";
        }
        
      };
});

logo.forEach(element => {
    element.onmouseout  = function (event) {
        let target = event.target;
        target.style.opacity = "0.5";
        // background.style.backgroundColor = "#ffffff";
      };
});

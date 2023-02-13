const slider = document.querySelectorAll(".slider");

const box = document.getElementById("box");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
var incr = 0;
var count = slider.length - 2;
var decr = 0;
function forward() {
  //   event.preventDefault;
  if (incr <= count * 500) {
    incr = incr + 500;
    for (var i = 0; i < slider.length; i++) {
      slider[i].style.transform = "translateX(-" + incr + "px)";
    }
  } else {
    return;
  }
}

function back() {
  //   event.preventDefault;
  if (incr > 0) {
    incr = incr - 500;
    for (var i = 0; i < slider.length; i++) {
      slider[i].style.transform = "translateX(-" + incr + "px)";
    }
  } else {
    return;
  }
}

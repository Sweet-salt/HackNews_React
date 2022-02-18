let curPos = 0;
let position = 0;
const BOX_WIDTH = 220;
const items = document.querySelector(".home_popular");
function prev() {
  if (curPos > 0) {
    position += BOX_WIDTH;
    items.style.transform = `translateX(${position}px)`;
    curPos = curPos - 1;
  }
}

function next() {
  if (curPos < 4) {
    position -= BOX_WIDTH;
    items.style.transform = `translateX(${position}px)`;
    curPos = curPos + 1;
  }
}
//new
let new_curPos = 0;
let new_position = 0;
const NEW_BOX_WIDTH = 282;

const new_items = document.querySelector(".box_container");
function new_prev() {
  if (new_curPos > 0) {
    new_position += NEW_BOX_WIDTH;
    new_items.style.transform = `translateX(${new_position}px)`;
    new_curPos = new_curPos - 1;
  }
}
function new_next() {
  if (new_curPos < 3) {
    new_position -= NEW_BOX_WIDTH;
    new_items.style.transform = `translateX(${new_position}px)`;
    new_curPos = new_curPos + 1;
  }
}

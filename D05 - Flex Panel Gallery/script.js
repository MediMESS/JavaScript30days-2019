const images = document.querySelectorAll('.image');
const container = document.querySelector('.container');

// let array_text_center = Array.from(textCenter);
let p;

function flexGrow() {
  div = this.parentElement;
  console.log(div.style);
  div.style.flex = 4;
  // forEach
}
images.forEach( divImg =>
{
  divImg.children[1].addEventListener("click", flexGrow)
});

const panels = document.querySelectorAll('.panel');


function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes('flex-grow')){
    this.classList.toggle("open-active");
    console.log(this.classList);
    console.log(e);
  }
}

panels.forEach(panel=>panel.addEventListener("click", toggleOpen));
panels.forEach(panel=>panel.addEventListener("transitionend", toggleActive));

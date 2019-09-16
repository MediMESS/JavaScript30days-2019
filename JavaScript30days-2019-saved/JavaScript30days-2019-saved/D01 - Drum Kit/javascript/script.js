let effects = document.querySelectorAll('.effect');
let audio = document.querySelectorAll("audio");

// sleep has to be implemented like this
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function removeEffectStyle (event) {
  if (event.propertyName == "transform") {
    this.classList.remove("effects_style");
  }
}

document.addEventListener("keydown", event => {
  // this is in case we press many buttons at the same time.
  for (effect of effects) {
    if(event.key.toUpperCase()==effect.children[1].textContent.toUpperCase() ) {
      effect.classList.add("effects_style");
      effect.children[0].play();
      effect.children[0].currentTime = 0;

      effect.addEventListener("transitionend", removeEffectStyle);
      break;
    }
  }
});

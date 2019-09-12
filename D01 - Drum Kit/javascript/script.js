let effects = document.querySelectorAll('.effect');
let audio = document.querySelectorAll("audio");

// sleep has to be implemented like this
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
document.addEventListener("keydown",async function effectStyle (event) {
  // this is in case we press many buttons at the same time.
  for (effect of effects) {
    effect.classList.remove("effects_style");
  }
  for (effect of effects) {
    if(event.key.toUpperCase()==effect.children[1].textContent.toUpperCase() ) {
      effect.classList.add("effects_style");
      duration = effect.children[0].duration * 1000;
      effect.children[0].play();
      effect.children[0].currentTime = 0;
      await sleep(duration/2);
      effect.classList.remove("effects_style");
      break;
    }
  }
});

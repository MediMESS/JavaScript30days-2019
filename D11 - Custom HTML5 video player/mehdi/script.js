// ❚❚
const player = document.querySelector('.video_play');
const controls = document.querySelector('.progress__filled')


function showControls(){
  controls.style.visibility = "visible";
  console.log(controls.style);
}
function hideControls(){
  controls.style.visibility = "hidden";
  console.log(controls.style);
}
player.addEventListener("mouseover", showControls);
player.addEventListener("mouseout", hideControls)

const hero = document.querySelector('.hero');
const h1 = hero.querySelector('h1');
let walk = 400; //100px

function moveShadow(e){

  let {offsetWidth : heroWidth, offsetHeight: heroHeight} = hero;
  let {offsetX: mouseX, offsetY: mouseY} = e;

  if (this != e.target)
  {
    mouseX = e.target.offsetLeft + e.offsetX;
    mouseY = e.target.offsetTop + e.offsetY;
  }
  xShadoWalk = Math.round((mouseX * walk / heroWidth ) - (walk/2));
  yShadoWalk = Math.round((mouseY * walk / heroHeight ) - (walk/2));

  let shadow = ` ${xShadoWalk}px ${yShadoWalk}px 0 deepskyblue,
    ${-1*xShadoWalk}px ${yShadoWalk}px 0 gold,
    ${-1*xShadoWalk}px ${-1*yShadoWalk}px 0 red,
    ${xShadoWalk}px ${-1*yShadoWalk}px 0 lightgreen
    `;
    console.log(shadow);
  h1.style.textShadow = shadow;
}



hero.addEventListener("mousemove", moveShadow);

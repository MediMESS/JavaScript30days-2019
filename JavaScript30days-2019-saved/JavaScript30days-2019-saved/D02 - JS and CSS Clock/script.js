// alert("Hello world");
const hands = document.querySelectorAll('.hand');
let hourHand = hands[0];
let minuteHand = hands[1];
let secondHand = hands[2];

function rotate(element, degree) {
  element.style.transform = `rotate(${degree}deg)`;
}
function setDate() {
  let now = new Date();
  let stampDegree = {}
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/60) * 360);

  const minutes = now.getMinutes();
  const minuteDegrees = ((minutes/60) * 360);

  const hours = now.getHours();
  const hoursDegrees = ((hours/24) * 360);

  rotate(secondHand, secondsDegrees);
  rotate(minuteHand, minuteDegrees);
  rotate(hourHand, hoursDegrees);

}


setInterval(setDate, 1000);
// setTimeout(setDate, 1000);

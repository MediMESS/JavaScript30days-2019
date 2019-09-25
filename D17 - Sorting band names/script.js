const data_bands = ["The Plot in You", "The Devil Wears Prada", "Pierce the Veil", "Norma Jean", "The Bled", "Say Anything", "The Midway State", "We Came as Romans", "Counterparts", "Oh, Sleeper", "A Skylit Drive", "Anywhere But Here", "An Old Dog", "the a an are considered determinants"];

const bands = document.querySelector('.bands');

let regex = new RegExp("^\\bthe\\b|\\ba\\b|\\ban\\b",'i');
function strip(string){
  while (string.match(regex))
    string = string.replace(regex, '');
  return string;
}

function sortBrands(a,b) {
  if(strip(a) > strip(b))
    return 1;
  if(strip(a) < strip(b))
    return -1;
  return 0;
}
let sortedBrands = data_bands.sort((a,b) => sortBrands(a,b));

bands.innerHTML = sortedBrands.map( brand =>
{
  return `
    <li>
      ${brand}
    </li>
  `;
}).join('');

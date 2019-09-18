const cities = [];
const source = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let regex = '';

const container = document.querySelector('.container');
const input = document.querySelector('input');
const ul = document.querySelector('.suggestions');

fetch(source)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findCities(searched, cities)
{
  regex = new RegExp(`${searched}`, 'gi');
  let matchedCities = []
  matchedCities = cities
                    .filter( city => { return  city.city.match(regex) || city.state.match(regex)});
  return matchedCities;
}

function run_search(e) {
  if (e.which == 8 && input.value == ""){
    ul.innerHTML = `<li class="even">Filter for a city</li>      <li class="odd">Or a State</li>`;
    return 0;
  }
  let matchedCities = findCities(input.value, cities)
  if(matchedCities.length== []){
      ul.innerHTML = `<li class="even" style="background:orange; font-weight:800; color:white; ">NO PLACE FOUND!</li>`;
      return 0;
  }
  const html = matchedCities.map( city => {
    regex = new RegExp(this.value, 'gi');
    const cityName = city.city.replace(regex, `<span class="search">${this.value}</span>`);
    const stateName = city.state.replace(regex, `<span class="search">${this.value}</span>`);
      return `<li>
         <span>${cityName}, ${stateName}</span>
         <span class="population">${city.population}</span>
      </li>`;
    }).join('');
  ul.innerHTML = html;
}
input.addEventListener("keyup", run_search);
input.addEventListener("change", run_search);

document.addEventListener("keypress", (e) =>  {
  console.log(e);
})

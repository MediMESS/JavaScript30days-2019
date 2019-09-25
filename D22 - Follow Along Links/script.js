const links = document.querySelectorAll('a');
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.insertBefore(highlight, document.querySelector('script'));


function followLink(e) {
  const linkBoundaries = this.getBoundingClientRect();
  const coordinates = {
    width: linkBoundaries.width,
    height: linkBoundaries.height,
    top: linkBoundaries.top + window.scrollY,
    left: linkBoundaries.left
  };
  console.log(coordinates);
  highlight.style.width = `${coordinates.width}px`;
  highlight.style.height = `${coordinates.height}px`;
  highlight.style.transform = `translate(${coordinates.left}px, ${coordinates.top}px)`;
}


links.forEach( link=>  link.addEventListener("mouseenter", followLink));

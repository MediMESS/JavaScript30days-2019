const nav = document.querySelector('nav');
let topOfNav = nav.offsetTop;


function toggleFixNav(e){
  if (window.scrollY >= topOfNav){
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  }
  else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
  console.log(topOfNav, nav.offsetTop, window.scrollY);
}

window.addEventListener("scroll", toggleFixNav);

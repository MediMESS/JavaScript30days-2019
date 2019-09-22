const article = document.querySelector('.article-container');
const images = document.querySelectorAll('img.slide-in');
let i=0;
let heightVisible = 0;
// this can be performance issue, the amount of time that is counting.
// so we'll debounce it, which means we'll run this function for atmost
// how many seconds it'll need, he just grabbed a debounce function on internet for here and there
// with it if we passe function as checkSlide it will run every amount of miliseconds we gave it.
function debounce(func, wait=20, immediate=true){
  var timeout;
  return function(){
    var context = this, args=arguments;
    var later = function() {
      timeout = null;
      if (!immediate)
        func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow)
      func.apply(context, args);
  };
}
function checkSlide(e){
  console.log("\n\n");
  // how much is the page being scrolled down
  // to get how much height we're at we just add innerHeight
  images.forEach( img =>{
    // so to show when it's 50% of the image i just have to substract imgHeight/2
    // offsetTop will give us how far this image is from the beginning of the window
    const windowOffsetTop = (window.scrollY + window.innerHeight);
    // to know where is not only the top of the image but the bottom also
    const imageBottom = img.offsetTop + img.height + window.innerHeight;
    console.log("img offsetTop: ",img.offsetTop);
    console.log("image Bottom", imageBottom);
    console.log("window off set top", windowOffsetTop);
    const isHalfShown = windowOffsetTop > (img.offsetTop + img.height/2) ;
    const isNotScrolledPast = windowOffsetTop < imageBottom;
    if(isHalfShown && isNotScrolledPast)
      img.classList.add("visibleImage");
    else
      img.classList.remove("visibleImage");
  })
}

window.addEventListener("scroll", debounce(checkSlide));

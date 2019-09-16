inputs = document.querySelectorAll('input');
dot = document.querySelector('.dot');
body = document.querySelector('body');

function changeValue(event){
  let metric = this.dataset.sizingMetric || '';
  let value = this.value;
  if (event.type == "mousemove"){
    value = (event.offsetX / event.target.clientWidth) * event.target.getAttribute('max');
    console.log("BEFORE, "+value);
    if (metric == ''){
      value=this.value;
    }
  }
  console.log(`AFTER, ${value}${metric}`);
  document.documentElement.style.setProperty(`--${this.name}`, `${value}${metric}`)
  this.value = value;
  console.log(`${value}${metric}`);
}
for (input of inputs) {
  input.addEventListener("change", changeValue)
  input.addEventListener("mousemove", changeValue)
}

// here is a little fun, of how i can print a dot wherever the mouse is
function printDot (e) {
  let lastDot = document.querySelector('.red-dot');

  var tableRectDiv = document.createElement('div');
  tableRectDiv.classList.add("red-dot");
  let rect = dot.getBoundingClientRect();
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
  tableRectDiv.style.margin = tableRectDiv.style.padding = '0';
  tableRectDiv.style.top = (event.clientY + scrollTop) + 'px';
  tableRectDiv.style.left = (event.clientX + scrollLeft) + 'px';
// We want rect.width to be the border width, so content width is 2px less.
  tableRectDiv.style.width = (rect.width - 2) + 'px';
  tableRectDiv.style.height = (rect.height - 2) + 'px';
  if(lastDot)
  {
    document.body.removeChild(lastDot);
  }
  document.body.insertBefore(tableRectDiv, document.body.children[0]);
}
// document.addEventListener("mouseover", printDot);

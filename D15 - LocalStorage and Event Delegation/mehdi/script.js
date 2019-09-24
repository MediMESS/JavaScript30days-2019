// as long as it's not an object then it'll be passed by value. otherwise by reference
const list_toppings = document.querySelectorAll('.list-toppings li');
const button = document.querySelector('button');
const input = document.querySelector('input[type="text"]');
function clickTopping(e) {
  const span = this.querySelector('span');
  if (span.dataset.clicked == "false")
  {
    span.dataset.clicked="true";
  }
  else
  {
    span.innerText = "⚪";
    span.dataset.clicked="false";
  }
}
function previewTopping(e) {
  const span = this.querySelector('span');
  console.log(span.dataset.clicked);
  if(e.type == "mouseover")
  {
    if(span.dataset.clicked=="false")
      span.innerText = "👌";
  }
  if (e.type == "mouseout")
  {
    if(span.dataset.clicked=="false")
    span.innerText = "⚪";
  }
}
list_toppings.forEach(li => {
  li.addEventListener("click", clickTopping);
  li.addEventListener("mouseover", previewTopping);
  li.addEventListener("mouseout", previewTopping);
});

function addItem(){
  if (input.value!="")
  {
    

  }
}
button.addEventListener("click", addItem)

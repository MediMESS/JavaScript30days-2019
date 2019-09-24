const itemsList = document.querySelector('.plates');
const addItems = document.querySelector('.add-items');
const items = JSON.parse(localStorage.getItem('items'))||[];
const clear_btn = document.querySelector('[name=clearAll]');
const check_btn = document.querySelector('[name=checkAll]');
const uncheck_btn = document.querySelector('[name=uncheckAll]');

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  if(text==""){
    alert("enter text");
    return;
  }
  const item = {
    text,
    done:false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}
function populateList(plates=[], platesList)
{
  if (plates.length == 0)
  {
    platesList.innerHTML = `<li>Loading Tapas...</li>`;
    return ;
  }
  platesList.innerHTML = plates.map((plate, i) =>
  {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked":""}/>
        <label for="item${i}">${plate.text}</label>
      </li>
      `;
  }).join('');
}
function toggleDone(e){
  if (!e.target.matches('input')) return;
  const el = e.target;
  const index=el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}
function clear(){
  delete localStorage["items"];
  items.forEach((key, index) => { items.splice(key);});
  populateList(items, itemsList);
}
function toggleCheck(e) {
  if(e.target.name == "checkAll")
    items.forEach(item => item.done = true);
  else
    items.forEach(item => item.done = false);
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}
addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
clear_btn.addEventListener("click", clear);
check_btn.addEventListener("click", toggleCheck);
uncheck_btn.addEventListener("click", toggleCheck);
populateList(items, itemsList);

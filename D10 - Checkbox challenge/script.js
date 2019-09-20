const input =    document.querySelectorAll('input');

let lastCheckbox = -1;

function checkboxChange(e) {
  if (lastCheckbox == -1)
  {
    lastCheckbox = this
    return ;
  }
  let inBetween = false;
  if(e.shiftKey) {
    console.log(lastCheckbox);
    input.forEach( checkbox => {
      if(checkbox == this || checkbox == lastCheckbox)
      {
        inBetween = !inBetween;
        checkbox.checked = this.checked;
      }
      if(inBetween)
        checkbox.checked = this.checked;
    });
  }
  lastCheckbox = this;
}

input.forEach(checkbox => {
  checkbox.addEventListener("click", checkboxChange);
});

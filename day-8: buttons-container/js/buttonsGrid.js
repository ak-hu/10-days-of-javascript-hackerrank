// @language=javascript

const div = document.getElementById("btns");
let arr = [];

for (let i = 1; i < 10; i++) {
  const btn = document.createElement("button");
  btn.textContent = i;
  btn.id = `btn${i}`;
  if (btn.id !== `btn5`) arr.push(btn.id)
  div.appendChild(btn);
}

const btn5 = document.getElementById("btn5");

btn5.addEventListener("click", function() {
  const lastButtonValue = document.getElementById(arr[arr.length - 1]).innerHTML;
  
  for (let i = arr.length - 1; i > 0; i--) {
    const currentButton = document.getElementById(arr[i]);
    const previousButton = document.getElementById(arr[i - 1]);
    currentButton.innerHTML = previousButton.innerHTML;
  }
  
  const firstButton = document.getElementById(arr[0]);
  firstButton.innerHTML = lastButtonValue;
});
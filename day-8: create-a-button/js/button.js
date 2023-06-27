// @language=javascript

let n = 0;
const add = () => {
  n++;
  button.innerText = n;
};

const button = document.getElementById("btn");
button.innerText = n;
button.addEventListener("click", add);
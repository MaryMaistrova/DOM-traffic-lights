const btn = document.getElementById('btn');
const red = document.querySelector('li:first-of-type');
const yellow = document.querySelector('li:nth-of-type(2)');
const green = document.querySelector('li:nth-of-type(3)');


btn.addEventListener('click', () => {
  red.classList.toggle('red');
  yellow.classList.toggle('yellow');
  green.classList.toggle('green');
})
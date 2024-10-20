const btn = document.querySelector('button');
const red = document.querySelector('li:first-of-type');
const yellow = document.querySelector('li:nth-of-type(2)');
const green = document.querySelector('li:nth-of-type(3)');


btn.onclick = function() {
  red.style.filter = 'none';

}
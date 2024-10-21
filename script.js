const btn = document.getElementById('btn');
const red = document.querySelector('li:first-of-type');
const yellow = document.querySelector('li:nth-of-type(2)');
const green = document.querySelector('li:nth-of-type(3)');


let counterClick = 0;

btn.addEventListener('click', () => {
  if (counterClick === 0) {
    red.classList.add('red');
    green.classList.remove('green');
    counterClick++;
  } else if (counterClick === 1) {
    red.classList.remove('red');
    yellow.classList.add('yellow');
    counterClick++;
  } else if (counterClick === 2) {
    yellow.classList.remove('yellow');
    green.classList.add('green');
    counterClick = 0;
  }
});

'use strict';
//document.querySelector('.message').textContent = 'Fuck you';
document.querySelector('.message').textContent;
document.querySelector('.message').textContent = '😂😘 Correct Number!';
document.querySelector('.number').textContent = mathRandomInt();
document.querySelector('.score').textContent = 10;
//var z = document.querySelector('.guess').value;
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  //console.log(z);
});
//var z = document.querySelector('.guess').value;
function mathRandomInt() {
  let x = Math.floor(Math.random() * 20);
  if (x === 0) {
    return Math.floor(Math.random() * 20);
  } else {
    return x;
  }
}

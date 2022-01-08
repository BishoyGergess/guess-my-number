'use strict';

let x = 0;
const randomNum = function () {
  if (x === 0) {
    //+1 to make 20 possible and 0 impossible
    return (x = Math.floor(Math.random() * 20 + 1));
  } else {
    return x;
  }
};
var addNumber = function (num) {
  return num + 1;
};
console.log(randomNum());

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '😒😒 No Number!';
  } else {
    if (guess == randomNum()) {
      document.querySelector('.message').textContent = '😂😘 Correct Number!';
      document.querySelector('.number').textContent = randomNum();
      let scoreTex = document.querySelector('.score').textContent;
      let ScoreNum = Number(scoreTex);
      document.querySelector('.score').textContent = String(
        addNumber(ScoreNum)
      );
      document.body.style.backgroundColor = 'green';
    } else {
      if (guess < randomNum()) {
        document.querySelector('.message').textContent = '🔞 Too Short!';
      } else {
        if (guess > randomNum()) {
          document.querySelector('.message').textContent = '🔞 Too long!';
        }
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});

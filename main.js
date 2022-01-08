'use strict';

let score = 0;
let life = 15;
let highScore = 0;
let randomNumber = Math.floor(Math.random() * 20 + 1);

const lastLife = function () {
  if (life > 1) {
    life--;
    document.querySelector('.life').textContent = life;
  } else {
    life = 0;
    document.querySelector('.life').textContent = life;
    document.querySelector('.message').textContent = '💔 You Lose!';
    document.body.style.backgroundColor = 'red';
    //time function is not ready yet
    //window.setTimeout(location.reload(), 15000);
  }
};
const restGame = function () {
  score = 0;
  life = 15;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').textContent = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.life').textContent = life;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  randomNumber = Math.floor(Math.random() * 20 + 1);
};
console.log(randomNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '😒😒 No Number!';
  } else if (guess == randomNumber) {
    document.querySelector('.message').textContent = '😂😘 Correct Number!';
    document.querySelector('.number').textContent = randomNumber;
    score++;
    document.querySelector('.score').textContent = score;
    //differet way to change background
    //document.body.style.backgroundColor = 'green';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (gues !== randomNumber) {
    document.querySelector('.message').textContent =
      guess > randomNumber ? '🔞 Too long!' : '🔞 Too Short!';
    lastLife();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  restGame();
});

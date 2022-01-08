'use strict';

let x = 0;
//defined score here to make it easier
let score = 0;
let life = 15;
const randomNumber = Math.floor(Math.random() * 20 + 1);
//hard way to creat random number
// const randomNum = function () {
//   if (x === 0) {
//     //+1 to make 20 possible and 0 impossible
//     return (x = Math.floor(Math.random() * 20 + 1));
//   } else {
//     return x;
//   }
// };

//add score the old way
// var addNumber = function (num) {
//   return num + 1;
// };
console.log(randomNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '😒😒 No Number!';
  } else {
    if (guess == randomNumber) {
      document.querySelector('.message').textContent = '😂😘 Correct Number!';
      document.querySelector('.number').textContent = randomNumber;

      // Hard way to change score
      // let scoreTex = document.querySelector('.score').textContent;
      // let ScoreNum = Number(scoreTex);
      // document.querySelector('.score').textContent = String(
      //   addNumber(ScoreNum)
      // );
      //Easier way to change score
      score++;
      document.querySelector('.score').textContent = score;
      //differet way to change background
      //document.body.style.backgroundColor = 'green';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    } else {
      if (guess < randomNumber) {
        document.querySelector('.message').textContent = '🔞 Too Short!';
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
      } else {
        if (guess > randomNumber) {
          document.querySelector('.message').textContent = '🔞 Too long!';
          if (life > 1) {
            life--;
            document.querySelector('.life').textContent = life;
          } else {
            life = 0;
            document.querySelector('.life').textContent = life;
            document.querySelector('.message').textContent = '💔 You Lose!';
            document.body.style.backgroundColor = 'red';
            //time function is not ready yet
            //window.setInterval(location.reload(), 9000);
          }
        }
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});

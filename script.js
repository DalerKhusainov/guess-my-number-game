'use strict';

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const scoreNumber = function (number) {
  document.querySelector('.score').textContent = number;
};

const displayCorrectNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const getSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = getSecretNumber();

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    displayCorrectNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      scoreNumber(score);

      // When player lose
    } else {
      displayMessage('You lost the game!');
      scoreNumber(0);
    }
  }
});

// The Solution Of Challenge #1
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  scoreNumber(score);
  document.querySelector('.number').style.width = '15rem';
  secretNumber = getSecretNumber();
  displayMessage('Start guessing...');
  displayCorrectNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});

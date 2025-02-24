'use strict';

const ratings = document.getElementsByClassName('btn__rating');
const cardRating = document.getElementsByClassName('card--rating')[0];
const cardToast = document.getElementsByClassName('card--thankYou')[0];
const rating = document.getElementsByClassName('user__rating')[0];
const errorMsg = document.getElementsByClassName('error')[0];
let userRating;

for (let ind = 0; ind < ratings.length; ind++) {
  // click rating
  ratings[ind].addEventListener('click', function () {
    userRating = ind + 1;
  });
}

function submit() {
  userRating >= 1 ? getRating() : errorMsg.classList.remove('hidden');
}

function getRating() {
  cardRating.style.display = 'none';
  cardToast.style.display = 'flex';
  rating.textContent = userRating;
}

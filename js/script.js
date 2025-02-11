'use strict';

const ratings = document.getElementsByClassName('btn__rating');
const cardRating = document.getElementsByClassName('card--rating')[0];
const cardToast = document.getElementsByClassName('card--thankYou')[0];
const rating = document.getElementsByClassName('user__rating')[0];
let userRating;

for (let ind = 0; ind < ratings.length; ind++) {
  // hover effect
  ratings[ind].addEventListener('mouseover', function () {
    ratings[ind].classList.add('hover');
  });

  // after hover
  ratings[ind].addEventListener('mouseout', function () {
    ratings[ind].classList.remove('hover');

    ratings[ind].classList.add('after');
    setTimeout(() => {
      ratings[ind].classList.remove('after');
    }, 500);
  });

  // click rating
  ratings[ind].addEventListener('click', function () {
    if (ind > 0) {
      ratings[ind - 1].classList.add('after');
    }
    ratings[ind].classList.add('clicked');
    userRating = ind + 1;
  });
}

function getRating() {
  cardRating.style.display = 'none';
  cardToast.style.display = 'flex';
  rating.textContent = userRating;
}

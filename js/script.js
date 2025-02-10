'use strict';

const ratings = document.getElementsByClassName('btn__rating');

for (let ind = 0; ind < ratings.length; ind++) {
  ratings[ind].addEventListener('mouseover', function () {
    ratings[ind].classList.add('hover');
  });
  ratings[ind].addEventListener('mouseout', function () {
    ratings[ind].classList.remove('hover');
    ratings[ind].classList.remove('base');

    ratings[ind].classList.add('after');
    setTimeout(() => {
      ratings[ind].classList.remove('after');
    }, 500);
  });
}

function getRating() {}

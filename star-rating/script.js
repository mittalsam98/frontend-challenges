const starsContainer = document.querySelector('.stars-container');
const stars = starsContainer.querySelectorAll('.star');
const starCount = stars.length;
let rating = 0;

starsContainer.addEventListener('mouseover', hoverListener);
starsContainer.addEventListener('click', clickListener);
starsContainer.addEventListener('mouseleave', leaveListener);

function showFilledStars(targetVal) {
  for (let i = 0; i < targetVal; i++) {
    stars[i].classList.add('star-filled');
    stars[i].classList.remove('star-x');
  }

  for (let i = targetVal; i < starCount; i++) {
    stars[i].classList.remove('star-filled');
    stars[i].classList.add('star-unfilled');
  }
}

function hoverListener(e) {
  const targetVal = e.target.dataset.value;
  showFilledStars(targetVal);
}

function leaveListener() {
  showFilledStars(rating);
}
function clickListener(e) {
  const target = e.target;
  if (target.classList.contains('star')) {
    rating = target.dataset.index;
    showFilledStars(rating);
  }
}

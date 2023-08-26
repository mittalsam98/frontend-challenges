const positions = document.getElementsByName('position');
const types = document.getElementsByName('type');
const showToastButton = document.getElementById('show-toast');
const toastMessage = document.getElementById('toast-message');
const toastDuration = document.getElementById('duration');

const toastContainer = document.getElementById('toast-js-container');

showToastButton.addEventListener('click', showToast);

function showToast() {
  let selectedPosition;
  let selectedType;
  for (const position of positions) {
    if (position.checked) {
      selectedPosition = position.value;
      break;
    }
  }
  for (const type of types) {
    if (type.checked) {
      selectedType = type.value;
      break;
    }
  }

  createToast(
    getPositionClass(selectedPosition),
    selectedType,
    parseFloat(toastDuration.value),
    toastMessage.value
  );
}

function getPositionClass(position) {
  switch (position) {
    case 'top-right':
      return 'toast-js-top-right';
    case 'top-left':
      return 'toast-js-top-left';
    case 'bottom-right':
      return 'toast-js-bottom-right';
    case 'bottom-left':
      return 'toast-js-bottom-left';
  }
}

function createToast(position, type, duration, msg) {
  const toastEle = document.createElement('div');
  toastEle.classList.add('toast');
  toastEle.classList.add(position);
  toastEle.classList.add(type);
  toastEle.innerText = msg;

  toastContainer.appendChild(toastEle);
  toastEle.addEventListener('click', removeToast);

  // Show the toast with animation
  setTimeout(function () {
    toastEle.style.opacity = '1';
    toastEle.style.transform = 'translateY(0)';
  }, 10);

  // Hide the toast after duration
  setTimeout(function () {
    removeToast();
  }, duration);

  function removeToast() {
    toastEle.style.opacity = '0';
    toastEle.style.transform = 'translateY(20px)';
    setTimeout(function () {
      if (toastContainer.contains(toastEle)) {
        toastContainer.removeChild(toastEle);
      }
    }, 300);
    return;
  }

  return toastEle;
}

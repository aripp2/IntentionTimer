
var categories = document.getElementById('categories');
// var category = document.querySelectorAll('.category')
var whatInput = document.getElementById('what-input');
var minutesInput = document.getElementById('minutes-input');
var secondsInput = document.getElementById('seconds-input');
var startBtn = document.getElementById('start-btn');
var prompt = document.getElementById('prompt');


categories.addEventListener('click', selectCategory);
whatInput.addEventListener('keyup', inputHandler);
minutesInput.addEventListener('keyup', inputHandler);
secondsInput.addEventListener('keyup', inputHandler);
// startBtn.addEventListener('click', );

function selectCategory(e) {
  event.preventDefault()
  var selectedId = e.target.id
  var selectedCategory = e.target.innerText

}

function inputHandler(e) {
  e.preventDefault()

}

function disableStart(e) {
  e.preventDefault()
  if (whatInput.value !== '' && minutesInput.value !== '' && secondsInput.value !== '')
    startTimer()
}

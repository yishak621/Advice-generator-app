//import
import fetchData from './module/fetch.js';
import { getElement } from './module/getElement.js';
import colorFlipper from './module/color.js';
//declaration
const adviceSection = getElement('.advice-generator');
const adviceId = getElement('.advice-number');
const adviceParagraph = getElement('.advice-paragraph');
const toogleBtn = adviceSection.querySelector('.toogle-btn');

//invoking
const displayAdvice = ({ id, advice }) => {
  adviceId.textContent = `#${id}`;
  adviceParagraph.textContent = advice;
  adviceSection.classList.add('advice-generator-animate');
  setTimeout(() => {
    adviceSection.classList.remove('advice-generator-animate');
  }, 500);
};

//initializer func
const init = async () => {
  const advice = await fetchData();
  displayAdvice(advice);
};

//invoking function when dom content loaded and also when btn clicked
window.addEventListener('DOMContentLoaded', init);
toogleBtn.addEventListener('click', function () {
  init();
  colorFlipper();
});

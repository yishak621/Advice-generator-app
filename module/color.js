const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function colorFlipper() {
  let hexColor = '#'; //string # value to be aded in every loop
  for (let i = 0; i < 6; i++) {
    ///the quantity of numbers is 6
    hexColor += hex[getRandomNumber()];
  }
  return (document.body.style.backgroundColor = hexColor);
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length); //whatever the value of this it is <15[inside our array]
}

export default colorFlipper;

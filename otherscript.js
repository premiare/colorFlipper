

//GET RANDOM HEX CODE TO CHANGE BACKGROUND
buttonToggle.addEventListener("click", function() {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);
  // document.body.style.textContent = colors[randomNumber];

  colorHEX.textContent = colors[randomNumber];
  backgroundContainer.style.background = colors[randomNumber];
  colorName.style.color = colors[randomNumber];
});


// GET RANDOM NAME TO MATCH RANDOM HEX CODE
buttonToggle.addEventListener("click", function() {
  const randomName = getRandomName();
  colorName.textContent = names[randomName];
});


// GET RGB CODE TO MATCH RANDOM HEX CODE
buttonToggle.addEventListener("click", function() {
  const randomRGB = getRandomRGB();
  colorRGB.textContent = rgbs[randomRGB];
});



function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

function getRandomName() {
  return Math.floor(Math.random() * names.length);
}

function getRandomRGB() {
  return Math.floor(Math.random() * rgbs.length);
}











//GET RANDOM HEX CODE TO CHANGE BACKGROUND
buttonToggle.addEventListener("click", function() {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);
  // document.body.style.textContent = colors[randomNumber];

  colorHEX.textContent = colors[randomNumber];
  backgroundContainer.style.background = colors[randomNumber];
  colorName.style.color = colors[randomNumber];
});


// GET RANDOM NAME TO MATCH RANDOM HEX CODE
buttonToggle.addEventListener("click", function() {
  const randomName = getRandomName();
  colorName.textContent = names[randomName];
});


// GET RGB CODE TO MATCH RANDOM HEX CODE
buttonToggle.addEventListener("click", function() {
  const randomRGB = getRandomRGB();
  colorRGB.textContent = rgbs[randomRGB];
});



function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

function getRandomName() {
  return Math.floor(Math.random() * names.length);
}

function getRandomRGB() {
  return Math.floor(Math.random() * rgbs.length);
}

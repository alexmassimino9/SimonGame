
const buttonColors = ["red", "blue", "green", "yellow"];


function nextSequence(){
  let randomNumber = Math.floor(Math.random()*4)
  const randomChosenColor = buttonColors[randomNumber]
  console.log(randomChosenColor);
};

nextSequence();

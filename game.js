
const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];

function nextSequence(){
  let randomNumber = Math.floor(Math.random()*4)
  const randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor)
  console.log(gamePattern);
let x =   $("#"+ randomChosenColor).attr("id");
console.log(x)

};

nextSequence();

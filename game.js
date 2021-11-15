var buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern []

function nextSequence (){
  var randomNumber = Math.floor(Math.random()*4)
  var randomChosenColor = buttonColors[randomNumber]
  gamePattern.push(randomChosenColor)
  console.log(gamePattern)
  $("#"+ randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)
  // let audio = new Audio("sounds/" + $("#"+randomChosenColor)+ ".mp3")

}

$(".btn").click(function(){

  var userChosenColor = $(this).attr("id")
  alert(userChosenColor)


})
nextSequence()
// at step 4

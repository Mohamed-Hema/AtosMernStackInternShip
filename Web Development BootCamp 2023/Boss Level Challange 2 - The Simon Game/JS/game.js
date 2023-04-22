// Define an array of button colors
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

// Set the initial state of the game
var started = false;
var level = 0;

// Start the game when A key is pressed
$(document).keypress(function() {
  if (!started) {
    // Update Level
    $("#level-title").text("Level " + level);
    // Generate the next color sequence
    nextSequence();
    started = true;
  }
});

// Handle button clicks
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

// Check if user input is like game input
function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // if they're all matched
    if (userClickedPattern.length === gamePattern.length){

      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else { 
    // if it doesn't match
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    //Game OVER!
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

// Generate the next color sequence
function nextSequence() {

  userClickedPattern = [];
  level++;

  // Update Level
  $("#level-title").text("Level " + level);
  // Generate a random number and use it to select a random color from the button colors array
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  // Add the random color to the game pattern
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

// Button Press Animation
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

// Playing Button Sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Reset the game
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

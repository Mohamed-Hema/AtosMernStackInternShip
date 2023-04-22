// Creating Array for Button Colors
const buttonColours = ["red", "blue", "green", "yellow"];

const gamePattern = [];


// Func to Generate random numbers between 0 and 3
function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 3);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    // Animate Buttons
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    // Play Color Audio
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}


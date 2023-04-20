// First Random Number Generation
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage1 = "dice" + randomNumber1 + ".png";

// Second Random Number Generation
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = "dice" + randomNumber2 + ".png";

// Change Image1
document.querySelector(".img1").setAttribute("src", "/images/"+randomDiceImage1);

// Change Image2
document.querySelector(".img2").setAttribute("src", "/images/"+randomDiceImage2);

// Winner Detector
let winner;
if(randomDiceImage1 > randomDiceImage2){
    winner = "Player 1 Wins";
} else if(randomDiceImage2 > randomDiceImage1) {
    winner = "Player 2 Wins";
} else {
    winner = "Draw!";
}

// Change Title
document.querySelector("h1").innerHTML = winner;
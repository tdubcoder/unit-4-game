$(document).ready(function() {

    var wins = 0;
    var lost = 0;
    var score = 0;

var computerGuess = parseInt(Math.floor(Math.random() * 120) + 19);
$("#randomNumber").html(computerGuess);

var stone1 = parseInt(Math.floor(Math.random() * 12) + 1);
var stone2 = parseInt(Math.floor(Math.random() * 12) + 1);
var stone3 = parseInt(Math.floor(Math.random() * 12) + 1);
var stone4 = parseInt(Math.floor(Math.random() * 12) + 1);

console.log("computerGuess" + computerGuess);
console.log("stone1 " + stone1);
console.log("stone2 " + stone2);
console.log("stone3 " + stone3);
console.log("stone4 " + stone4);

function reset () {

    score = 0;
    $("#score").html(score);
    computerGuess = parseInt(Math.floor(Math.random() * 120) + 19);
    $("#randomNumber").html(computerGuess);

    stone1 = parseInt(Math.floor(Math.random() * 12) + 1);
    stone2 = parseInt(Math.floor(Math.random() * 12) + 1);
    stone3 = parseInt(Math.floor(Math.random() * 12) + 1);
    stone4 = parseInt(Math.floor(Math.random() * 12) + 1);

}

$("#stone1").on("click", function() {

                score = score + stone1;
                $("#score").html(score);
                console.log("score1 " + score);
                if (score == computerGuess) {
                    checkifwon();
                }
                else if (score > computerGuess) {
                    checkifwon();
                }
                
});

$("#stone2").on("click", function() {

                score = score + stone2;
                $("#score").html(score);
                console.log("score2 " + score);
                if (score == computerGuess) {
                checkifwon();
                }
                else if (score > computerGuess) {
                checkifwon();
    }

});

$("#stone3").on("click", function() {

                score = score + stone3;
                $("#score").html(score);
                console.log("score3 " + score);
                if (score == computerGuess) {
                checkifwon();
                }
                else if (score > computerGuess) {
                checkifwon();
}

});

$("#stone4").on("click", function() {

                score = score + stone4;
                $("#score").html(score);
                console.log("score4 " + score);
                if (score == computerGuess) {
                checkifwon();
                }
                else if (score > computerGuess) {
                checkifwon();
}

});

function checkifwon() {

    if(score === computerGuess) {

    wins++;
    console.log(wins);
    $("#winOrLose").html("You Win!!");
    $("#wins").html("Wins: " + wins);
    reset();
    }
    else if (score > computerGuess) {

    lost++;
    console.log(lost);
    $("#winOrLose").html("You Lost!!");
    $("#losses").html("Losses: " + lost);
    reset();
}

}
});
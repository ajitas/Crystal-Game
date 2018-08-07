//variables for storing the four random numbers hidden behind each crystal
var randNum1;
var randNum2;
var randNum3;
var randNum4;
//variable to store the sum of random numbers clicked
var randTotal;
//counter for wins and losses
var win = 0;
var loss = 0;

//checks if the target sum is greater than 0
function isScorePositive(intArg){
    if(intArg>0)
        return true;
    else
        return false;
}

//resets the game
function resetGame(){
    //generate 4 random numbers between 1-12
    randNum1 = Math.floor(Math.random()*12)+1;
    randNum2 = Math.floor(Math.random()*12)+1;
    randNum3 = Math.floor(Math.random()*12)+1;
    randNum4 = Math.floor(Math.random()*12)+1;
    //generate a random number for target sum between 19-120
    randTotal = Math.floor(Math.random()*102)+19;
    //show the target sum in the appropriate position
    $("#target-score").text(randTotal);
}

//checks if the game is over or one can continue to play
function checkforGameOver(){
    //check if target sum is less than 1
    if(!isScorePositive(randTotal)){
        //if target sum is exactly 0, you won the game
        if(randTotal ==0){
            //increase wins and display it with a sound
            win++;
            document.getElementById("winner-sound").play();
            $("#wins").text(parseInt($("#wins").text()) +1);
        }
        else{
            //increase losses and display it with a sound
            loss++;
            document.getElementById("loser-sound").play();
            $("#losses").text(parseInt($("#losses").text()) +1);
        }
        //restart the game
        resetGame();
    }
}

$( document ).ready(function() {

    //resets the game and scoreboard
    resetGame();
    $("#wins").text("0");
    $("#losses").text("0");

}).on("click","#crystal1",function(){
    //subtract the random number clicked from the target sum shown
    randTotal = randTotal - randNum1;
    //update the target score
    $("#target-score").text(randTotal);
    //check if the game is over or not
    checkforGameOver();
    
}).on("click","#crystal2",function(){
    //subtract the random number clicked from the target sum shown
    randTotal = randTotal - randNum2;
    //update the target score
    $("#target-score").text(randTotal);
    //check if the game is over or not
    checkforGameOver();
    
}).on("click","#crystal3",function(){
    //subtract the random number clicked from the target sum shown
    randTotal = randTotal - randNum3;
    //update the target score
    $("#target-score").text(randTotal);
    //check if the game is over or not
    checkforGameOver();
    
}).on("click","#crystal4",function(){
    //subtract the random number clicked from the target sum shown
    randTotal = randTotal - randNum4;
    //update the target score
    $("#target-score").text(randTotal);
    //check if the game is over or not
    checkforGameOver();

}).on("click","#rules",function(){
    //show modal for rules
    $("#myModal").show();
}).on("click", ".close", function(){
    //close rules modal
    $("#myModal").hide();
});
var randNum1;
var randNum2;
var randNum3;
var randNum4;
var randTotal;
var win = 0;
var loss = 0;

function isScorePositive(intArg){
    if(intArg>0)
        return true;
    else
        return false;
}

function resetGame(){
    randNum1 = Math.floor(Math.random()*12)+1;
    randNum2 = Math.floor(Math.random()*12)+1;
    randNum3 = Math.floor(Math.random()*12)+1;
    randNum4 = Math.floor(Math.random()*12)+1;
    randTotal = Math.floor(Math.random()*102)+19;
    console.log(randTotal);
    $("#target-score").text(randTotal);
}

function checkforGameLost(){
    if(!isScorePositive(randTotal)){
        if(randTotal ==0){
            win++;
            document.getElementById("winner-sound").play();
            $("#wins").text(parseInt($("#wins").text()) +1);
        }
        else{
            loss++;
            document.getElementById("loser-sound").play();
            $("#losses").text(parseInt($("#losses").text()) +1);
        }
        resetGame();
    }
}

$( document ).ready(function() {
    resetGame();
    $("#wins").text("0");
    $("#losses").text("0");

}).on("click","#crystal1",function(){
    randTotal = randTotal - randNum1;
    $("#target-score").text(randTotal);
    checkforGameLost();
    
}).on("click","#crystal2",function(){
    randTotal = randTotal - randNum2;
    $("#target-score").text(randTotal);
    checkforGameLost();
    
}).on("click","#crystal3",function(){
    randTotal = randTotal - randNum3;
    $("#target-score").text(randTotal);
    checkforGameLost();
    
}).on("click","#crystal4",function(){
    randTotal = randTotal - randNum4;
    $("#target-score").text(randTotal);
    checkforGameLost();
}).on("click","#rules",function(){
    $("#myModal").show();
}).on("click", ".close", function(){
    $("#myModal").hide();
});
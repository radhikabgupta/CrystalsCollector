//computer randomly selects a number between 19-120 for player to match
var randomNum = 19 + Math.floor(Math.random() * 120);

//show this number under #numToGuess
$("#numToGuess").html(randomNum);

var uniqueValues=[];

//computer randomly selects a unique random number between 1 - 12 for each crystal - each crystal will be assinged a unique random number
var InitResetCrstals = function() {
    var cNum;
    while (uniqueValues.length < 4){
        cNum = 1 + Math.floor(Math.random() * 12);
        if (jQuery.inArray(cNum, uniqueValues)=='-1') {
            uniqueValues[uniqueValues.length] = cNum;
        } 
    }
}

//Initialize variables
var userTotal = 0;
var wins = 0;
var losses = 0;
$("#totalNum").html(userTotal);
$("#wins").html(wins);
$("#losses").html(losses);
InitResetCrstals();

//reset all variables once game is won/lost
var reset = function() {
    userTotal = 0;
    randomNum = 18 + Math.floor(Math.random() * 120);
    uniqueValues=[];
    InitResetCrstals();
    console.log(randomNum);
    $("#numToGuess").html(randomNum);
    $("#totalNum").html(userTotal);
    $("#wins").html(wins);
    $("#losses").html(losses);
}

//alert win or loss
var gameAlertText;
var gameAlert = function(){
    alert(gameAlertText);
}

//if else statement for winning or losing. 
var winCheck = function() {
    var audioElement = document.createElement("audio");  
    var soundClip;

    if (userTotal == randomNum) {
        $("#wins").html(wins++);        
        soundClip =  "assets/audio/applause.mp3";
        audioElement.setAttribute("src", soundClip);
        debugger;        
        audioElement.play(); 
        gameAlertText = "Hooray! You won!";
        setTimeout(gameAlert, 1000);        
        setTimeout(reset, 1000);    

    } else if (userTotal > randomNum) {
        $("#losses").html(losses++);        
        soundClip =  "assets/audio/sad_trombone.mp3";   
        audioElement.setAttribute("src", soundClip);
        audioElement.play();    
        gameAlertText =  "You did not win! Try Again!"          
        setTimeout(gameAlert,1000);       
        setTimeout(reset, 1000);  
    }
};

//whenever user clicks a crystal, the random number is added to total score.
$("#purple").on("click", function() {
    userTotal = userTotal + uniqueValues[0]; 
    $("#totalNum").html(userTotal);
    setTimeout(winCheck, 250);
})

$("#yellow").on("click", function() {
    userTotal = userTotal  + uniqueValues[1]; 
    $("#totalNum").html(userTotal);
    setTimeout(winCheck, 250);
})

$("#blue").on("click", function() {
    userTotal = userTotal  + uniqueValues[2]; 
    $("#totalNum").html(userTotal);
    setTimeout(winCheck, 250);
})

$("#red").on("click", function() {
    userTotal = userTotal  + uniqueValues[3]; 
    $("#totalNum").html(userTotal);
    setTimeout(winCheck, 250);
})




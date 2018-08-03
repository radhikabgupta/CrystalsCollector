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
//if else statement for winning or losing. 
var winCheck = function() {
    var audioElement = document.createElement("audio");  
    var soundClip;

    if (userTotal == randomNum) {
        $("#wins").html(wins++);        
        soundClip =  "assets/audio/applause.mp3";
        audioElement.setAttribute("src", soundClip);  
        audioElement.play(); 

        $("#modalText").html("Hooray! You won!");
        modal.style.display = "block";  
        //reset();                    

    } else if (userTotal > randomNum) {
        $("#losses").html(losses++);        
        soundClip =  "assets/audio/sad_trombone.mp3";   
        audioElement.setAttribute("src", soundClip);
        audioElement.play();    

        $("#modalText").html("You did not win! Try Again!"); 
        modal.style.display = "block"; 
        //reset();               
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

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    reset();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        reset();
    }
}




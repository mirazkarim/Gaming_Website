//link
let playerOneButton = document.getElementById("player_one_button")
let playerTwoButton = document.getElementById("player_two_button")

//error
let playerOneError = document.getElementById("player_one_error")
let playerTwoError = document.getElementById("player_two_error")

////life
let lifeOne = document.getElementById("one")
let lifeTwo = document.getElementById("two")
let lifeThree = document.getElementById("three")

//p1
let game;

playerOneButton.addEventListener("click", function(){
    let playerOneInput = document.getElementById("player_one_input").value

    if(playerOneInput < 0){
        playerOneError.innerText = "your number is too small"
    }
    else if(playerOneInput > 9){
        playerOneError.innerText = "your number is too big"
    }
    else if(playerOneInput == ""){
        playerOneError.innerText = "please write something"
    }
    else{
        game = playerOneInput
        console.log(game)
        document.getElementById("player_one").style.display = "none"
        document.getElementById("player_two").style.display = "block"
    }

})

//p2

let chance = 0;

playerTwoButton.addEventListener("click", function(){
    let playerTwoInput = document.getElementById("player_two_input").value
chance++;

    if(playerTwoInput < 0){
        playerTwoError.innerText = "your number is too small"
    }
    else if(playerTwoInput > 9){
        playerTwoError.innerText = "your number is too big"
    }
    else if(playerTwoInput == ""){
        playerTwoError.innerText = "please write something"
    }

    if(playerTwoInput == game){
        window.location.href = "win.html"
    }
    


    if(chance == 1){
        document.getElementById("three").style.display = "none"
    }
    else if(chance == 2){
        document.getElementById("two").style.display = "none"
    }
    else if(chance == 3){
        document.getElementById("one").style.display = "none"
        window.location.href = "lose.html"
    }

})
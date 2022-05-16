function computerPlay(){
    let randomInt = Math.floor((Math.random() * (3 - 1 + 1) + 1))
    
    
    if(randomInt == 1){
        return("Rock")
    }
    else if (randomInt == 2){
        return("Paper")
    }
    else if(randomInt == 3){
        return("Scissors")
    }
}

function playRound(playerSelection, computerSelection){
    switch(playerSelection.toLowerCase()){
        case "rock":
            if(computerSelection.toLowerCase() == "scissors"){
                return("You Win! " + playerSelection + " beats " + computerSelection)
            }
            else if(computerSelection.toLowerCase() == "rock"){
                return("Tied")
            }
            else if(computerSelection.toLowerCase() == "paper"){
                return("You Lose! " + computerSelection + " beats " + playerSelection)
            }
            break
        case "paper":
            if(computerSelection.toLowerCase() == "rock"){
                return("You Win! " + playerSelection + " beats " + computerSelection)
            }
            else if(computerSelection.toLowerCase() == "paper"){
                return("Tied")
            }
            else if(computerSelection.toLowerCase() == "scissors"){
                return("You Lose! " + computerSelection + " beats " + playerSelection)
            }
            break
        case "scissors":
            if(computerSelection.toLowerCase() == "paper"){
                return("You Win! " + playerSelection + " beats " + computerSelection)
            }
            else if(computerSelection.toLowerCase() == "scissors"){
                return("Tied")
            }
            else if(computerSelection.toLowerCase() == "rock"){
                return("You Lose! " + computerSelection + " beats " + playerSelection)
            }
            break
    }
}


function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = window.prompt("Enter your choice: ")
        console.log(playRound(playerSelection, computerPlay()))
    }
}

game()

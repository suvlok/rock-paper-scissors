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

let playerWinCount = 0
let computerWinCount = 0

function playRound(playerSelection, computerSelection){
    switch(playerSelection.toLowerCase()){
        case "rock":
            if(computerSelection.toLowerCase() == "scissors"){
                playerWinCount++
                return("You Win! " + playerSelection + " beats " + computerSelection)
            }
            else if(computerSelection.toLowerCase() == "rock"){
                return("Tied")
            }
            else if(computerSelection.toLowerCase() == "paper"){
                computerWinCount++
                return("You Lose! " + computerSelection + " beats " + playerSelection)
            }
            break
        case "paper":
            if(computerSelection.toLowerCase() == "rock"){
                playerWinCount++
                return("You Win! " + playerSelection + " beats " + computerSelection)
            }
            else if(computerSelection.toLowerCase() == "paper"){
                return("Tied")
            }
            else if(computerSelection.toLowerCase() == "scissors"){
                computerWinCount++
                return("You Lose! " + computerSelection + " beats " + playerSelection)
            }
            break
        case "scissors":
            if(computerSelection.toLowerCase() == "paper"){
                playerWinCount++
                return("You Win! " + playerSelection + " beats " + computerSelection)
            }
            else if(computerSelection.toLowerCase() == "scissors"){
                return("Tied")
            }
            else if(computerSelection.toLowerCase() == "rock"){
                computerWinCount++
                return("You Lose! " + computerSelection + " beats " + playerSelection)
            }
            break
    }
}


/* function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = window.prompt("Enter your choice: ")
        console.log(playRound(playerSelection, computerPlay()))
    }
} 

game()
*/

window.onload=function(){
    const results = document.querySelector("#resultText")

    //Adding the button logic
    const rockButton = document.querySelector("#rock")
    rockButton.addEventListener('click', () => {
        results.textContent = playRound("rock", computerPlay())
        checkWinner()
    })

    const paperButton = document.querySelector("#paper")
    paperButton.addEventListener('click', () => {
        results.textContent =  playRound("paper", computerPlay())
        checkWinner()
    })

    const scissorButton = document.querySelector("#scissors")
    scissorButton.addEventListener('click', () => {
        results.textContent = playRound("scissors", computerPlay())
        checkWinner()
    })
}

function checkWinner(){
    const winnerText = document.querySelector("#winnerText")
    const playerScore = document.querySelector("#playerScore")
    const computerScore = document.querySelector("#computerScore")

    playerScore.innerHTML = "Player Score: " + playerWinCount
    computerScore.innerHTML = "Computer Score: " + computerWinCount

    if(playerWinCount % 5 === 0 && playerWinCount != 0){
        winnerText.innerHTML = "Congrats! You have Won!"
        playerWinCount = 0
        computerWinCount = 0
    }
    else if (computerWinCount % 5 === 0 && computerWinCount != 0){
        winnerText.innerHTML = "Too bad. The computer has Won!"
        playerWinCount = 0
        computerWinCount = 0
    }
    else{
        winnerText.innerHTML = ""
    }

    console.log(playerWinCount)
}

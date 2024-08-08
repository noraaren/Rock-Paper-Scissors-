console.log("Hello World"); 

const container = document.querySelector("#container");
const rockButton = document.createElement("img");
const paperButton = document.createElement("img");
const scissorsButton = document.createElement("img");

container.appendChild(paperButton);
container.appendChild(scissorsButton);
container.appendChild(rockButton);
rockButton.src = "./rock.png"
paperButton.src = "./Paper.png";
scissorsButton.src = "./scissors.png"; 



function playGame(){

        let playerScore = 0; 
        let computerScore = 0; 

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

    function getComputerChoice() {
        let num = Math.random();  
        if (num < 0.33) {
            return "Rock"; 
        } else if (num < 0.66) {
            return  "Paper";
        } else {
        return "Scissors";
        }
    }; 


    function getHumanChoice() { 
        rockButton.addEventListener('click', () =>{ console.log("rock"); return "Rock";}); 
        paperButton.addEventListener('click', () =>{ console.log("paper"); return "Paper";}); 
        scissorsButton.addEventListener('click', () =>{ console.log("scissors"); return "Scissors";}); 

    };



    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "Rock" && computerChoice === "Paper") {
            computerScore++;
        } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            playerScore++;
        } else if (humanChoice === "Paper" && computerChoice === "Rock") {
            playerScore++;
        } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
            computerScore++;
        } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
            computerScore++;
        } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            playerScore++;
        } else if (humanChoice === computerChoice) {
            return;
        }
        
    }; 



    //     for(let i = 0; i < 5 ; i++) {
    //         const humanSelection = getHumanChoice();
    //         const computerSelection = getComputerChoice();
    //         playRound(humanSelection, computerSelection); 
        
    //     }
        
    //     if (playerScore > computerScore) {
    //         console.log("Human wins the game!");
    //     } else if (computerScore > playerScore) {
    //         console.log("Computer wins the game!");
    //     } else {
    //         console.log("The game is a tie!");
    //     }
    }


    playGame();

   



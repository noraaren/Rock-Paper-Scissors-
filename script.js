console.log("Hello World"); 

const container = document.querySelector("#container");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
container.appendChild(paperButton);
container.appendChild(scissorsButton);
container.appendChild(rockButton);
rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors"; 



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
        container.addEventListener('click', (event) => {
            let target = event.target; 
    
            switch(target.id) { 
                case "rockButton": 
                    return "rock";
                case "paperButton":
                    return "paper";
                case "scissorsButton":
                    return "scissors";
            }
        });
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


        function playRound(humanChoice, computerChoice) {
            if (humanChoice === "Rock" && computerChoice === "Paper") {
                computerScore++;
            } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
                humanScore++;
            } else if (humanChoice === "Paper" && computerChoice === "Rock") {
                humanScore++;
            } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
                computerScore++;
            } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
                computerScore++;
            } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
                humanScore++;
            } else if (humanChoice === computerChoice) {
                return;
            }
        }; 


        for(let i = 0; i < 5 ; i++) {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection); 
        
        }
        
        if (playerScore > computerScore) {
            console.log("Human wins the game!");
        } else if (computerScore > playerScore) {
            console.log("Computer wins the game!");
        } else {
            console.log("The game is a tie!");
        }
    }


    playGame();

   



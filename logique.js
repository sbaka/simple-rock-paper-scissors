const game = ()=>{
    let pScore = 0;
    let cScore = 0;
    
    //paly match
    const playmatch = () => {
        const options= document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");
        
        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
              this.style.animation = "";
            });
          });
        //computer options
        const computerOptions = ["rock","paper","scissors"];
            
        options.forEach(option => {
            option.addEventListener("click", function() {
                //setting the computer choice 
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(()=>{
                    //comparing hands
                    compareHands(this.textContent,computerChoice);
                    //updating images
                    playerHand.src = `.\\img\\${this.textContent}.png`;
                    computerHand.src = `./img/${computerChoice}.png`;
                }, 2000);
                playerHand.style.animation = "playerShake 2s ease";
                computerHand.style.animation = "computerShake 2s ease";
                // this is the animation 
                
            });
        });    
          
    };
    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
      };
    const compareHands = (playerChoice, computerChoice) => {
        //updating the text
        const winner = document.querySelector(".title");
        //checking for a tie
        if( playerChoice === computerChoice){
            winner.textContent = "It's a tie";
            winner.style.fontWeight="bold"
            winner.style.fontSize="50px";
            return;
        }
        //checking for rock 
        if(playerChoice === "rock"){
            if(computerChoice === "paper"){
                winner.textContent = "Computer wins";
                winner.style.fontWeight="bold"
                winner.style.fontSize="50px";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Player wins";
                winner.style.fontWeight="bold"
                winner.style.fontSize="50px";
                pScore++;
                updateScore();
                return;
            }
        }
        //checking for paper
        if(playerChoice === "paper"){
            if(computerChoice === "scisors"){
                winner.textContent = "Computer wins";
                winner.style.fontWeight="bold"
                winner.style.fontSize="50px";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Player wins";
                winner.style.fontWeight="bold"
                winner.style.fontSize="50px";
                pScore++;
                updateScore();
                return;
            }
        }
        //checking for scisors
        if(playerChoice === "scissors"){
            if(computerChoice === "rock"){
                winner.textContent = "Computer wins";
                winner.style.fontWeight="bold"
                winner.style.fontSize="50px";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Player wins";
                winner.style.fontWeight="bold"
                winner.style.fontSize="50px";
                pScore++;
                updateScore();
                return;
            }
        }
    }
    //calling the function;
    playmatch();
}
//to start the game 
game();
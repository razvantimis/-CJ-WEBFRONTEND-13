console.log('Start game')
function initGame() {
    var GamePosibility = {
        rock: 'rock',
        paper: 'paper',
        scissors: 'scissors'
    }

    const possibilities = ["rock", "paper", "scissors"];
    const score = {
        user: 0,
        computer: 0,
    }
    var user;
    let computer;
    for (var index = 0; index < 100; index++) {
        user = getRandomChoice()
        computer = getRandomChoice()
        const winner = getWinner(user, computer);
        if (winner === "user") {
            score.user += 1;
        } else if (winner === "computer") {
            score.computer += 1;
        }
    }

    return {
        score
    }
    function getRandomChoice(){
        return possibilities[Math.floor(Math.random() * possibilities.length)]
    }
    function getWinner(userChoice, computerChoise) {
        let winner;
        if (userChoice === computerChoise) {
            winner = 'draw';
        } else {
            switch (userChoice) {
                case GamePosibility.rock:
                    if (computerChoise === GamePosibility.scissors) {
                        // rock wins
                        winner = "user";
                    } else {
                        // paper wins
                        winner = "computer";
                    }
                    break;
                case GamePosibility.paper:
                    if (computerChoise === GamePosibility.rock) {
                        // paper wins
                        winner = "user"
                    } else {
                        // scissors wins
                        winner = "computer";
                    }
                    break;
                case GamePosibility.scissors:
                    if (computerChoise === GamePosibility.rock) {
                        // rock wins
                        winner = "computer";
                    } else {
                        winner = "user"
                    }
                    break;
            }
        }
        return winner


    }
   
}
const game = initGame();
console.log(game.score)





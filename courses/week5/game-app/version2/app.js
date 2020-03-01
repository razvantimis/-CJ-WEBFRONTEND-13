console.log('Start game')

const GamePosibility = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors'
}

function getRandomChoice(possibilities) {
    const index = Math.floor(Math.random() * possibilities.length);
    return possibilities[index];
}

function getWinner(userChoice, computerChoise) {
    if(userChoice === computerChoise){
        return 'Its a draw'
    }
    switch (userChoice) {
        case GamePosibility.rock:
            if (computerChoise === GamePosibility.scissors) {
                // rock wins
                return "User wins!";
            } else {
                // paper wins
                return "Computer wins!";
            }
        case GamePosibility.paper:
            if (computerChoise === GamePosibility.rock) {
                // paper wins
                return "User wins!";
            } else {
                // scissors wins
                return "Computer wins!";
            }
        case GamePosibility.scissors:
            if (computerChoise === GamePosibility.rock) {
                // rock wins
                return "Computer wins!";
            } else {
                // scissors wins
                return "User wins!";
            }
    }
    return winner;
}
function play() {
    const possibilities = [GamePosibility.rock, GamePosibility.paper, GamePosibility.scissors];
    const computerChoise = getRandomChoice(possibilities);
    const userChoice = getRandomChoice(possibilities);

    console.log('Computer choice:', computerChoise);
    console.log('User choice:', userChoice);
  
    console.log(getWinner(userChoice, computerChoise))

}

play();
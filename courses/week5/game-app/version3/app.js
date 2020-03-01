console.log('Start game')

function game() {
    console.log('Start game')

    const GamePosibility = {
        rock: 'rock',
        paper: 'paper',
        scissors: 'scissors'
    }
    const possibilities = [GamePosibility.rock, GamePosibility.paper, GamePosibility.scissors];
    
    function getRandomChoice(possibilities) {
        const index = Math.floor(Math.random() * possibilities.length);
        return possibilities[index];
    }
    
    function getWinner(userChoice, computerChoise) {
        if (userChoice === computerChoise) {
            return 'draw'
        }
        switch (userChoice) {
            case GamePosibility.rock:
                if (computerChoise === GamePosibility.scissors) {
                    // rock wins
                    return "user";
                } else {
                    // paper wins
                    return "computer";
                }
            case GamePosibility.paper:
                if (computerChoise === GamePosibility.rock) {
                    // paper wins
                    return "user";
                } else {
                    // scissors wins
                    return "computer";
                }
            case GamePosibility.scissors:
                if (computerChoise === GamePosibility.rock) {
                    // rock wins
                    return "computer";
                } else {
                    // scissors wins
                    return "user";
                }
        }
        return winner;
    }
    let score = {
        user: 0,
        computer: 0,
    }
    function play() {
        const computerChoise = getRandomChoice(possibilities);
        const userChoice = getRandomChoice(possibilities);
    
        console.log('Computer choice:', computerChoise);
        console.log('User choice:', userChoice);
    
        const winner = getWinner(userChoice, computerChoise);
    
        if (winner === 'user') {
            score.user += 1;
        } else if (winner === 'computer') {
            score.computer += 1;
        }
    }
    for (let index = 0; index < 100; index++) {
        play();
    }
    console.log(score);
}

game();
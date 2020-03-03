console.log('Start game')

function initGame() {
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



    function play(userChoice, score) {
        const computerChoise = getRandomChoice(possibilities);

        console.log('Computer choice:', computerChoise);
        console.log('User choice:', userChoice);

        const winner = getWinner(userChoice, computerChoise);

        if (winner === 'user') {
            score.user += 1;
        } else if (winner === 'computer') {
            score.computer += 1;
        }
    }


    return function (userChoice) {
        let score = {
            user: 0,
            computer: 0,
        }
        play(userChoice, score);
        return score;
    };
}


let globalScore = {
    user: 0,
    computer: 0,
}

const playButton = document.getElementById('play-button');

const playGame = initGame();


const inputElement = document.querySelector('input');
let userChoice = "rock";
inputElement.addEventListener('input', function (event) {
    userChoice = event.target.value;
})

playButton.addEventListener('click', () => {
    const score = playGame(userChoice);
    globalScore.user += score.user;
    globalScore.computer += score.computer;
    document.querySelector("p").innerText = `user: ${globalScore.user} computer: ${globalScore.computer}`;
});
console.log('Start game')


var score = {
    user: 0,
    computer: 0,
};

var GamePosibility = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors'
}
var possibilities = [GamePosibility.rock, GamePosibility.paper, GamePosibility.scissors];

var userIndex = Math.floor(Math.random() * possibilities.length);
var computerIndex = Math.floor(Math.random() * possibilities.length);

userChoice = possibilities[userIndex];
computerChoise = possibilities[computerIndex]


console.log('Computer choice:', computerChoise);
console.log('User choice:', userChoice);


var winner;
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

if (winner === 'user') {
    score.user += 1;
} else if (winner === 'computer') {
    score.computer += 1;
}

console.log(score);


var userIndex = Math.floor(Math.random() * possibilities.length);
var computerIndex = Math.floor(Math.random() * possibilities.length);

userChoice = possibilities[userIndex];
computerChoise = possibilities[computerIndex]


console.log('Computer choice:', computerChoise);
console.log('User choice:', userChoice);


var winner;
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

if (winner === 'user') {
    score.user += 1;
} else if (winner === 'computer') {
    score.computer += 1;
}

console.log(score);

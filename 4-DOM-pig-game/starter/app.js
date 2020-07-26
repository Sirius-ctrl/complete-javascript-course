/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his global score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// the game object
let gameState = {
    scores:[0,0],
    roundScore:0,
    activePlayer:0
}

// init the games at the very beginning
initValue();

//add event listen to the roll-button
document.querySelector(".btn-roll").addEventListener('click', () => {
    let dice = Math.floor(Math.random()*6) +1;
    let diceDOM = document.querySelector('.dice');

    diceDOM.style.display = 'block';

    // or just diceDOM.src = 'dice-'+ dice + '.png'
    diceDOM.setAttribute('src', 'dice-'+ dice + '.png');

    if (dice !== 1) {
        gameState.roundScore += dice;
    } else {
        // reset the source and change player
        gameState.roundScore = 0;
        changePlayer();
    }

    document.getElementById('current-' + gameState.activePlayer).textContent 
        = gameState.roundScore;
});

// add event listener to hold button
document.querySelector('.btn-hold').addEventListener('click', () => {
    // hide the dice
    document.querySelector('.dice').style.display = 'none';
    changePlayer();
});

// add event listener to new game
document.querySelector('.btn-new').addEventListener('click', () => {
    initValue();
})


function initValue() {
    gameState.scores       = [0,0];
    gameState.roundScore   = 0;
    gameState.activePlayer = 0;
    // hide the dice at the beginning
    document.querySelector('.dice').style.display = 'none';
    /// reset the score
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
}

function changePlayer() {
    gameState.scores[gameState.activePlayer] += gameState.roundScore;
    gameState.roundScore = 0;
    document.getElementById('current-' + gameState.activePlayer).textContent = 0;
    document.getElementById('score-' + gameState.activePlayer).textContent 
        = gameState.scores[gameState.activePlayer];

    gameState.activePlayer = Math.abs(gameState.activePlayer - 1);
    // need to change the DOM to reflect player change
}

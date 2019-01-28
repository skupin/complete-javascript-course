/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, activePlayer, roundScore, diceNumber, gamePlaying;

init();

function init(){
    score = [0,0];
    activePlayer = 0;
    roundScore = 0;
    diceNumber = 0;
    gamePlaying = true;
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
}


document.querySelector('.btn-roll').addEventListener('click',function(){
    if (gamePlaying){
        document.querySelector('.dice').style.display = 'block';
        var dice = Math.floor(Math.random() * 6) + 1;
        document.querySelector('.dice').src = 'dice-' + dice + '.png';
        if (dice > 1){
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if (gamePlaying){
        score[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
        if (score[activePlayer] >= 20){
            document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.getElementById('name-' + activePlayer).textContent = 'Winner!!';
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click',init);


function nextPlayer(){
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    //document.querySelector('.dice').style.display = 'none';

};


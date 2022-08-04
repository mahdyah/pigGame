'use strict'
let score0 = document.getElementById('score--0')
let score1 = document.getElementById('score--1')
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')

let currentScore0 = document.getElementById('current--0')
let currentScore1 = document.getElementById('current--1')

let dice = document.querySelector('.dice')
let newGame = document.querySelector('.btn--new')
let rollDice = document.querySelector('.btn--roll')
let hold = document.querySelector('.btn--hold')

let activePlayer , scores,currentScore ,playing;

const init=function(){
activePlayer = 0
scores=[0,0]
currentScore = 0
playing=true

    score0.textContent=0
    score1.textContent=0
    currentScore0.textContent=0
    currentScore1.textContent=0

    dice.classList.add('hidden');
    player0.classList.remove('.player--winner') 
    player1.classList.remove('.player--winner') 
    player0.classList.add('player--active') 
    player1.classList.remove('player--active') 
}
init()

const switchPlayer=function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
}


rollDice.addEventListener('click', function () {
    if(playing){
    let random = Math.trunc(Math.random() * 6) + 1

    dice.src = `dice-${random}.png`;
    dice.classList.remove('hidden')

    if (random !== 1) {
        currentScore += random
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else {
switchPlayer()
       
 }

    }
})
hold.addEventListener('click',function(){
    if(playing) {
scores[activePlayer]+=currentScore
document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
if(scores[activePlayer] >= 100){
    playing=false
    dice.classList.add('hidden')
  document.querySelector(`player--${activePlayer}`).classList.add('.player--winner')  
  document.querySelector(`player--${activePlayer}`).classList.remove('.player--active')
}
switchPlayer()
    }
})

newGame.addEventListener('click',init)
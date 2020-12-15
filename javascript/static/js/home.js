// Challenge 1: Your Age in Days

function ageInDays(){
    var birthyear = prompt("what year were you born?");
    if (birthyear){
        var ageInDayss = (2020 - birthyear) * 365;
        var h1 = document.createElement('h1');
        var textAnswer = document.createTextNode("you are " + ageInDayss + " days old.");
        h1.setAttribute("id", "ageInDays");
        h1.appendChild(textAnswer);
        document.getElementById("flex-box-result").appendChild(h1);

    }

}
function reset() {
    document.getElementById('ageInDays').remove();
}

// Challenge 2: Cat Generator

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById("flex-cat-gen");
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

//Challenge 3: stone, Paper, Scissors

function rpsGame(yourChoice){
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    // console.log(humanChoice);
    botChoice = numberToChoice(randToRpsInt());
    // console.log(botChoice);
    result = decideWinner(humanChoice, botChoice);
    message = finalMessage(result);
    rpsFrontEnd(humanChoice, botChoice, message);
}
function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number]
}
function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'scissors': 0, 'rock': 1, 'paper': 0.5},
        'scissors': {'scissors': 0.5, 'rock': 0, 'paper': 1},
    }
    var yourScore = rpsDatabase[yourChoice][computerChoice]
    var computerScore = rpsDatabase[computerChoice][yourChoice]
    return [yourScore, computerScore]
}

function finalMessage([yourScore, computerScore]){
    if (yourScore === 0){
        return {'message': 'You lost!', 'color': 'red'};
    }
    else if (yourScore === 0.5){
        return {'message': 'You tied!', 'color': 'yellow'};
    }
    else{
        return {'message': 'You win!', 'color': 'green'};
    }


}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    // console.log(humanImageChoice)
    // console.log(imageDatabase[humanImageChoice])
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50, 233, 1)' >";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font=size: 60px; padding: 30px' >" + finalMessage['message'] + "</h1>" ;
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38, 24, 1)' >";
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

// Challenge 4: Change the Color of All Buttons!

var all_buttons = document.getElementsByTagName('button')
console.log(all_buttons)

copy_all_button = [];
 for(let i=0; i<all_buttons.length; i++)
 {
     copy_all_button.push(all_buttons[i].classList[1]);
 }
 console.log(copy_all_button)

 function buttonColorChange(buttonColour){
     if (buttonColour.value === 'red')
     {
        redButtonColor();
     }
     else if (buttonColour.value === 'green')
     {
        greenButtonColor();
     }
     else if (buttonColour.value === 'random')
     {
        randomButtonColor();
     }
     else if (buttonColour.value === 'reset')
     {
        resetButtonColor();
     }
 }

 function redButtonColor(){
    for(let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
 }
 function greenButtonColor(){
    for(let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
 }

 function randomButtonColor(){
    for(let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(randomColor(randToColorInt()));
    }
 }

 function randToColorInt(){
    return Math.floor(Math.random() * 4);
 }

 function randomColor(number){
     return ["btn-primary", "btn-danger", "btn-success", "btn-warning"][number]
 }

 function resetButtonColor(){
    for(let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copy_all_button[i]);
    }
 }

// Challenge 5: BlackJack

let blackjackGame = {
    "you" : { "scoreSpan" : "#your-blackjack-result", "div": "#your-box", "score": 0},
    "dealer" : { "scoreSpan" : "#dealer-blackjack-result", "div": "#dealer-box", "score": 0},
    'cards' : ['2', '3', '4', '5', '6', '7','8','9','10','K','Q','J','A' ],
    'cardMap' : {'2' : 2, '3' : 3, '4' : 4, '5':5, '6':6, '7':7,'8':8,'9':9,'10':10,'K':10,'Q':10,'J':10,'A':[1,11] },
    'wins': 0,
    'losses': 0,
    'drew': 0,
    'isStand': false,
    'turnsOver': false,

};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio("static/sound/swish.m4a");
const winSound = new Audio("static/sound/cash.mp3");
const lossSound = new Audio("static/sound/aww.mp3");

document.querySelector("#blackjack-hit-button").addEventListener('click',blackjackHit);
document.querySelector("#blackjack-deal-button").addEventListener('click',blackjackDeal);
document.querySelector("#blackjack-stand-button").addEventListener('click',blackjackStand);

function blackjackHit(){
    if(blackjackGame['isStand'] === false){
        let card = randomCards();
        showCards(YOU,card);
        updateScore(card, YOU)
        showScore(YOU)
    }
}

function showCards(activePlayer, card){
    let cardImage = document.createElement('img');
    cardImage.src = 'static/images/'+card+'.png';
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
}

function blackjackDeal(){
    if(blackjackGame['turnsOver'] === true){
        blackjackGame['isStand'] = false;
        let yourImages = document.querySelector("#your-box").querySelectorAll('img')
        for( i = 0; i<yourImages.length; i++){
            yourImages[i].remove();
        }
        document.querySelector("#your-blackjack-result").textContent = 0 ;
        document.querySelector("#your-blackjack-result").style.color = 'white';
        YOU['score'] = 0
        let dealerImages = document.querySelector("#dealer-box").querySelectorAll('img')
        for( i = 0; i<dealerImages.length; i++){
            dealerImages[i].remove();
        }
        document.querySelector("#dealer-blackjack-result").textContent = 0 ;
        document.querySelector("#dealer-blackjack-result").style.color = 'white';
        DEALER['score'] = 0
        document.querySelector("#blackjack-result").textContent = "Let's Play";
        document.querySelector("#blackjack-result").style.color = "black";
        blackjackGame['turnsOver'] = false

    }

}

function randomCards(){
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

function updateScore(cards, activePlayer){
    if (cards === 'A'){
        if (activePlayer['score'] + blackjackGame['cardMap'][cards][1]<= 21){
            activePlayer['score'] +=  blackjackGame['cardMap'][cards][1];
        }else{
            activePlayer['score'] += blackjackGame['cardMap'][cards][0];
        }
    }else{
        activePlayer['score'] += blackjackGame['cardMap'][cards];
    }


}

function showScore(activePlayer){
    if (activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }

}

function blackjackStand(){
    if(blackjackGame['turnsOver'] === false){
        blackjackGame['isStand'] = true;
        var card = randomCards();
        showCards(DEALER,card);
        updateScore(card, DEALER);
        showScore(DEALER);

        if(DEALER['score'] > 15){
            blackjackGame['turnsOver'] = true;
            let winner = computeWinner();
            showResults(winner);
        }
    }

}

function computeWinner(){
    let winner;
    if(YOU['score'] <= 21){
        if ((YOU['score'] > DEALER['score']) || (DEALER['score']> 21)){
            winner = YOU;
            blackjackGame['wins']++;
        }else if (YOU['score'] < DEALER['score']){
            winner = DEALER;
            blackjackGame['losses']++;
        }else if (YOU['score'] === DEALER['score']){
            blackjackGame['drew']++;
        }
    }
    else if ((YOU['score'] > 21) && (DEALER['score'] <= 21)){
        winner = DEALER;
        blackjackGame['losses']++;
    }
    else if ((YOU['score'] > 21) || (DEALER['score'] > 21)){
        blackjackGame['drew']++;
    }

    return winner
}

function showResults(winner){
    let message, messageColor;
    if (winner === YOU){
        document.querySelector("#wins").textContent = blackjackGame['wins'];
        message = "You Won!"
        messageColor = 'green'
        winSound.play();
    }else if (winner === DEALER){
        document.querySelector("#losses").textContent = blackjackGame['losses'];
        message = "You Loss!"
        messageColor = 'red'
        lossSound.play();
    }else{
        document.querySelector("#drew").textContent = blackjackGame['drew'];
        message = "You Drew!"
        messageColor = 'black'
    }

    document.querySelector("#blackjack-result").textContent = message;
    document.querySelector("#blackjack-result").style.color = messageColor;

}
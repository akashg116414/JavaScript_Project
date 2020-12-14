// Challenge 1: Your Age in Days

function ageInDays(){
    var birthyear = prompt("what year were you born?");
    var ageInDayss = (2020 - birthyear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("you are " + ageInDayss + " days old.");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
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

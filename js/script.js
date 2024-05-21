let playTime = 3;

const containerEl = document.querySelector('div.container'); //variabile per il container


//Creo l'array di numeri casuali
let guessNum = [];

while (guessNum.length < 5){
    num = getRandomNum(1, 99);
    if (!guessNum.includes(num)) {
        guessNum.push(num);
    }
}

//creo gli articoli e ci metto dentro ognuno dei numeri dell'array dei numeri casuali

for (let i = 0; i < guessNum.length; i++){
    const articleEl = document.createElement('article');
    articleEl.classList.add('num');
    articleEl.append(guessNum[i]);
    containerEl.appendChild(articleEl);
}

//creo il timer

const timer = setInterval( function(){
    playTime--;
    console.log(playTime);
    if( playTime <= 0){
        containerEl.innerHTML = '';
        clearInterval(timer);
        alert("Time's out!");
        simonSays(guessNum);
    }
}, 1000);

let userNum = [];




function simonSays (randomArray){    
    for (let i = 0; i < randomArray.length; i++){
        let userGuess = Number.parseInt(prompt('Type each number and click enter'), 10);
        userNum.push(userGuess);
    }
    let correctNum = [];

    if (randomArray[i] === userNum[i]) {
        correctNum.push(randomArray[i]);
    }
    containerEl.innerHTML("Questi sono giusti!" + correctNum);
    return correctNum
}












function getRandomNum(min, max) {
    num = Math.floor(Math.random() * ((max + 1) - min)) + min;
    return num;
}
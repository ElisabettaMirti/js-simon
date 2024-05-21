let playTime = 30;

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







// const timer = setInterval( function(){
//     playTime--;
//     console.log(playTime);
//     if( playTime <= 0){
//         clearInterval(timer);
//         alert("Time's out!")
//     }
// }, 1000);


function getRandomNum(min, max) {
    num = Math.floor(Math.random() * ((max + 1) - min)) + min;
    return num;
}
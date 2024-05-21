let playTime = 30;

const containerEl = document.querySelector('div.container'); //variabile per il container

for (let i = 0; i < 5; i++){
    const articleEl = document.createElement('article');
    articleEl.classList.add('num');
    articleEl.append(getRandomNum(1, 99));
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
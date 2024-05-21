let playTime = 30;

const containerEl = document.querySelector('div.container'); //variabile per il container

for (let i = 0; i < 5; i++){
    const articleEl = document.createElement('article');
    articleEl.classList.add('num');
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